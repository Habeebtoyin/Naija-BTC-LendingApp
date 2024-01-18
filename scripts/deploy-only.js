const { ethers } = require("hardhat");
const {
  ETHAddress,
  ETH_USD_PF_ADDRESS,
  DAI_USD_PF_ADDRESS,
  USDC_USD_PF_ADDRESS,
  USDO_USD_PF_ADDRESS,
  FEEWALLET
} = require("../addresses");


const numberToEthers = (number) => {
    return ethers.utils.parseEther(number.toString());
  };
  
  async function main() {
    const INTEREST_RATE = 3;
    const BORROW_RATE = 4;
  
    /********************** Deploy DAIToken *************************/
    const DAIToken = await ethers.getContractFactory("DAIToken");
    const daiToken = await DAIToken.deploy();
    await daiToken.deployed();
    const DAI_ADDRESS = daiToken.address;
    console.log('const DAITokenAddress = "' + DAI_ADDRESS + '"');
  
    /********************** Deploy USDOToken *************************/
    const USDOToken = await ethers.getContractFactory("USDOToken");
    const usdoToken = await USDOToken.deploy();
    await usdoToken.deployed();
    const USDO_ADDRESS = usdoToken.address;
    console.log('const USDOTokenAddress = "' + USDO_ADDRESS + '"');
  
    /********************** Deploy USDCToken *************************/
    const USDCToken = await ethers.getContractFactory("USDCToken");
    const usdcToken = await USDCToken.deploy();
    await usdcToken.deployed();
    const USDC_ADDRESS = usdcToken.address;
    console.log('const USDCTokenAddress = "' + USDC_ADDRESS + '"');
  
    /********************** Deploy AddressToTokenMap *************************/
    const AddressToTokenMap = await ethers.getContractFactory(
      "AddressToTokenMap"
    );
    const addressToTokenMap = await AddressToTokenMap.deploy();
    await addressToTokenMap.deployed();
    console.log(
      'const AddressToTokenMapAddress = "' + addressToTokenMap.address + '"'
    );
  
    /********************** Deploy LendingConfig *************************/
    const LendingConfig = await ethers.getContractFactory("LendingConfig");
    const lendingConfig = await LendingConfig.deploy(INTEREST_RATE, BORROW_RATE);
    await lendingConfig.deployed();
    console.log('const LendingConfigAddress = "' + lendingConfig.address + '"');
  
    /********************** Deploy LendingHelper *************************/
    const LendingHelper = await ethers.getContractFactory("LendingHelper");
    const lendingHelper = await LendingHelper.deploy(
      addressToTokenMap.address,
      lendingConfig.address
    );
    await lendingHelper.deployed();
    console.log('const LendingHelperAddress = "' + lendingHelper.address + '"');
  
    /********************** Deploy LendingPoolV2 *************************/
    const LendingPool = await ethers.getContractFactory("LendingPool");
    const lendingPool = await LendingPool.deploy(
      addressToTokenMap.address,
      lendingConfig.address,
      lendingHelper.address,
      FEEWALLET
    );
    await lendingPool.deployed();
    LendingPoolAddress = lendingPool.address;
    console.log('const LendingPoolAddress = "' + lendingPool.address + '"');
  
      /****************** Adding Assets ******************/
  await addressToTokenMap._setAddress(ETHAddress, "ETH");
  await addressToTokenMap._setAddress(DAI_ADDRESS, "DAI");
  await addressToTokenMap._setAddress(USDC_ADDRESS, "USDC");
  await addressToTokenMap._setAddress(USDO_ADDRESS, "USDO");
  console.log("Token Address Set");

  /****************** Adding Price Feed ******************/
  await addressToTokenMap._setPriceFeedMap(DAI_ADDRESS, DAI_USD_PF_ADDRESS);
  await addressToTokenMap._setPriceFeedMap(USDC_ADDRESS, USDC_USD_PF_ADDRESS);
  await addressToTokenMap._setPriceFeedMap(USDO_ADDRESS, USDO_USD_PF_ADDRESS);
  await addressToTokenMap._setPriceFeedMap(ETHAddress, ETH_USD_PF_ADDRESS);
  console.log("Price Feed Address Set");

    }

    main().catch((error) => {
        console.log(error);
        process.exitCode = 1;
      });
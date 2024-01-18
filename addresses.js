// const ETHAddress = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
// const ETHAddress="0xBd5C4aFED93045AF208b01095Dd9E683425CB212"
const ETHAddress="0xd9d6507119Ec56ce22A89bEdAcd6B44D495BFf08"

/****************** LOCAL HOST **********************/
// npx hardhat run scripts/deploy.js --network localhost
// const DAITokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
// const LINKTokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
// const USDCTokenAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
// const AddressToTokenMapAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
// const LendingConfigAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
// const LendingHelperAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
// const LendingPoolAddress = "0x0165878A594ca255338adfa4d48449f69242Eb8F";

/****************** SEPOLIA TESTNET **********************/

// // npx hardhat run scripts/deploy-sepolia.js --network sepolia
// const DAITokenAddress = "0xd9d6507119Ec56ce22A89bEdAcd6B44D495BFf08";
// const LINKTokenAddress = "0x21D5E15aD4C86Ca7239380CFB8D53bFe6BD79aEe";
// const USDCTokenAddress = "0xCD1FfF5FcDE62bEFDc1a7E3Ddf6E166fA24f7B98";
// const AddressToTokenMapAddress = "0x9Af36aD30ecAc6ce8B6D1F3d6C42711c48Ab627f";
// const LendingConfigAddress = "0x63101C389e9a005a1f3b9EB036B73a95FC23fAEf";
// const LendingHelperAddress = "0x42F16c5E448114CB9a93D47b81349CdAE13ED768";
// const LendingPoolAddress = "0x44D882b4954C747E62067cf3A1C18cd9e98E58FB";

/****************** ONLYLAYER TESTNET **********************/
// npx hardhat run scripts/deploy-sepolia.js --network only

const DAITokenAddress = "0x1e4D00493f395e22Fa57Ab0edB7e89a0D2e6A4Ac"
const USDOTokenAddress = "0xcD3DFd5388d016Db8805253AC6187E255885e8d2"
const USDCTokenAddress = "0x48eD41CfA82Decde04e8205dff76F1211A34F59E"
const AddressToTokenMapAddress = "0xD06a23777d0311bcD812409e0283CD43C21Bf4c6"
const LendingConfigAddress = "0x29904057c14AfA396577248eb533A11eC9F4972E"
const LendingHelperAddress = "0x0898CDBc7e0962eE48E39CFc3cfCa0E421C6EadA"
const LendingPoolAddress = "0xc054105Cbc77b19cb63023721f4080BA9068fdbE"
const FEEWALLET = "0x6fc588fd96ac55B00530283cE0Aa5E664EAF51a0";

/********* PRICE FEED ADDRESSES ***********/
// Sepolia PF addresses
// https://docs.chain.link/data-feeds/price-feeds/addresses/#Sepolia%20Testnet
const ETH_USD_PF_ADDRESS = "0x694AA1769357215DE4FAC081bf1f309aDC325306";
const DAI_USD_PF_ADDRESS = "0x14866185B1962B63C3Ea9E03Bc1da838bab34C19";
const USDC_USD_PF_ADDRESS = "0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E";
const USDO_USD_PF_ADDRESS = "0xc59E3633BAAC79493d908e63626716e204A45EdF";


// shubham wallet addresses
const account1 = "0x4644933680922aE17748753ae20264436ca616cc";
const account2 = "0x021edEFA528293eB8ad9A2d9e0d71011f6297601";
const account3 = "0xc1f33e8c427fd4126A23A4a9B721BD97Fb11dDe6";

// sasi wallet addresses
const account4 = "0x315F60449DaB3D321aF75821b576E7F436308635";
const account5 = "0x4B40f99E93A8814be7fDe5F6AaFA5e9823E13728";
const account6 = "0x3f39Ae58Cb1148ec1Ad903648319359Cfdc34a02";

module.exports = {
  ETHAddress,
  DAITokenAddress,
  USDOTokenAddress,
  USDCTokenAddress,
  AddressToTokenMapAddress,
  LendingConfigAddress,
  LendingHelperAddress,
  LendingPoolAddress,
  ETH_USD_PF_ADDRESS,
  DAI_USD_PF_ADDRESS,
  USDC_USD_PF_ADDRESS,
  USDO_USD_PF_ADDRESS,
  FEEWALLET,
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
};

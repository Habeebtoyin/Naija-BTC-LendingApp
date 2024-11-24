import { ethIcon, usdcIcon, daiIcon, usdtIcon } from "./assets";

// For localhost
import {
  ETHAddress,
  DDAITokenAddress,
  DUSDTTokenAddress,
  DUSDCTokenAddress,
  // DWBTCTokenAddress

} from "./addresses";

export const token = [
  {
    image: ethIcon,
    name: "ETH",
    address: ETHAddress,
    decimal: "18",
    apy: 3,
    isCollateral: true,
  },

  {
    image: daiIcon,
    name: "DAI",
    address: DDAITokenAddress,
    decimal: "18",
    apy: 3,
    isCollateral: true,
  },
  {
    image: usdcIcon,
    name: "USDC",
    address: DUSDCTokenAddress,
    decimal: "18",
    apy: 3,
    isCollateral: true,
  },
  {
    image: usdtIcon,
    name: "USDT",
    address: DUSDTTokenAddress,
    decimal: "18",
    apy: 3,
    isCollateral: true,
  },
  // {
  //   image: btcIcon,
  //   name: "WBTC",
  //   address: DWBTCTokenAddress,
  //   decimal: "18",
  //   apy: 3,
  //   isCollateral: true,
  // },
  
];

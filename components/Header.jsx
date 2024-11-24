import React, { useContext, useEffect } from "react";
import { ConnectButton } from "../components";
// import { logo } from "../assets";
import { defi_connectlogo } from "../assets";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="w-full h-15 bg-gradient-to-r bg-[#0A0D26] text-white flex py-3 px-4 lg:px-10 justify-between items-center ">
    <div className="flex items-center">
      <a href="/" className="focus:border-none">
        <Image src={defi_connectlogo} alt="DefiConnect icon" className="w-[50px] hover:opacity-80" />
      </a>
      <a className="text-[20px] text-white mx-6 font-semibold " href="" target="_blank"> <span className="text-[#854CFF]">DefiConnect</span></a>
     </div>
      <ConnectButton />
    </nav>
  );
};

export default Header;

import React, { useContext, useEffect } from "react";
import { ConnectButton } from "../components";
// import { logo } from "../assets";
import { defi_connectlogo } from "../assets";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="w-full h-15 bg-gradient-to-r from-white to-sky-600 text-white flex py-2 px-4 lg:px-10 justify-between items-center ">
      <a href="/">
        <Image src={defi_connectlogo} alt="DefiConnect icon" className="w-[70px] hover:opacity-80" />
      </a>
      <ConnectButton />
    </nav>
  );
};

export default Header;

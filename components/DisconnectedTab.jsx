import React from "react";
import { ConnectButton } from "../components";
import Image from "next/image";
import { money } from "../assets";

const DisconnectedTab = () => {
  return (
    <div className="px-2 md:px-16 -mt-10 w-full">
      <div className=" md:flex  md:justify-around p-5 my-4 items-center">
        <div className="md:text-[45px] text-[24px] text-left mx-10 font-bold my-5 max-w-[500px] ">
          <p>Crypto Lending made easy, borrow with easy with <span className="text-[#854CFF]">DefiConnect</span></p>
          <div className="flex justify-start items-center text-sm md:text-base mt-4 md:mt-6">
            <div className="mr-5 button_border rounded-full p-3 hover:bg-gray-900 cursor-pointer px-6"> Get started</div>
            <ConnectButton />
          </div>
        </div>
         <Image src={money} alt="money" className="md:w-[520px] md:h-[450px] h-[350px] w-[300px] shadow-md opacity-90 mx-4 rounded-md" /> 
      </div>
      

      <div className="bg-black/60 p-4 rounded-lg w-full flex justify-around md:max-w-[1100px] text-center max-w-[400px] font-bold mx-auto md:my-5 mt-28 text-white text-[16px] ">
        <div className="p-6 border-r-sky-600 border-r-2">  Earn Interest % </div>
        <div className="p-6 border-r-sky-600 border-r-2">  Lending $ </div>
        <div className="p-6 border-r-sky-600 border-r-2">  Low transaction </div>
      </div>
    </div>
  );
};

export default DisconnectedTab;

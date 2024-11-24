import React, { useContext, useEffect } from "react";

import lendContext from "../context/lendContext";
import { LoaderSkeleton, AssetsToSuppliesRow } from ".";

const AssetsToSupplies = () => {
  const { userAssets } = useContext(lendContext);
  return (
    <div className="w-full md:w-1/2 h-30 bg-[#0A0D26] rounded-md shadow-md shadow-[#652400]">
      <h1 className="px-6 py-5 font-semibold text-md text-white">Assets to supply</h1>

      <div className="pt-2 md:pt-3 overflow-auto">
        <table className="item-center min-w-full border-collapse bg-transparent ">
          <thead>
            <tr>
              <th className="font-medium text-[11px] md:text-xs px-3 text-white text-center align-middle border-b-[1px] border-blueGrey-100 whitespace-nowrap p-[6px]">
                Assets
              </th>
              <th className="font-medium text-[11px] md:text-xs px-3 text-white text-center align-middle border-b-[1px] border-blueGrey-100 whitespace-nowrap p-[6px]">
                Wallet Balance
              </th>
              <th className="font-medium text-[11px] md:text-xs px-3 text-white text-center align-middle border-b-[1px] border-blueGrey-100 whitespace-nowrap p-[6px]">
                APY
              </th>
              <th className="font-medium text-[11px] md:text-xs px-3 text-white text-center align-middle border-b-[1px] border-blueGrey-100 whitespace-nowrap p-[6px]">
                Can be collateral
              </th>
              <th className="font-medium text-[11px] md:text-xs px-3 text-white text-left align-middle border-b-[1px] border-blueGrey-100 whitespace-nowrap p-[6px]"></th>
            </tr>
          </thead>

          <tbody>
            {userAssets.length > 0 ? (
              userAssets.map((token, index) => (
                <AssetsToSuppliesRow
                  key={index}
                  address={token.address}
                  name={token.name}
                  image={token.image}
                  apy={token.apy}
                  balance={token.balance}
                  isCollateral={token.isCollateral}
                />
              ))
            ) : (
              <LoaderSkeleton />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetsToSupplies;

import { CheckCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import profile_banner from "../../public/profile_banner.png";

interface SellerCardProps {
  index: number;
}

const SellerCard: React.FunctionComponent<SellerCardProps> = ({ index }) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="flex relative items-center gap-3 -top-3 left-2 rounded-xl rounded-full ring-2 hover:ring-4 w-10 h-10 hover:scale-[1.05] cursor-pointer transition-all">
          <img
            src={
              "https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&w=256"
            }
            width={40}
            height={40}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          />
          <div className="absolute right-0 top-[27px]">
            <CheckCircleIcon className="text-primary-color w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <div className="w-max font-bold">Mr. Mom~</div>
            <div className="w-max text-gray-check-box text-sm">9999 ETH</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerCard;

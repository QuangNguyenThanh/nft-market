import Image from "next/image";
import React from "react";
import profile_banner from "../../public/profile_banner.png";
import { CheckCircleIcon } from "@heroicons/react/solid";

interface SlideHotNFTProps {
  imageBanner: string;
  imageAvatar: string;
  name: string;
}

const SlideHotNFT: React.FunctionComponent<SlideHotNFTProps> = ({
  imageBanner,
  imageAvatar,
  name,
}) => {
  return (
    <>
      <div className="pb-5 flex flex-col rounded-2xl items-center border">
        {/* <div> */}
        {/* <Image
          src="https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&w=256"
          objectFit="contain"
          width={40}
          height=
          className="rounded-t-2xl"
        /> */}
        <img src={imageBanner} alt="" className="rounded-t-2xl" />
        {/* </div> */}
        <div className="relative -top-[20px] z-50 rounded-xl rounded-full ring-4  ring-white hover:ring-4 w-10 h-10 hover:scale-[1.05] cursor-pointer transition-all">
          <div className="relative">
            <img
              src={imageAvatar}
              width={40}
              height={40}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            />
            <CheckCircleIcon className="text-primary-color w-4 h-4 absolute right-0 top-[27px]" />
          </div>
        </div>
        <div className="font-bold text-base mb-2">{name}</div>
        <div className="text-gray-check-box text-sm">ERC-113</div>
      </div>
    </>
  );
};

export default SlideHotNFT;

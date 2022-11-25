import { Result } from "ethers/lib/utils";
import React from "react";
import { hideString } from "../../utils";
import PropertiesNFT from "./PropertiesNFT";

interface TabDetailsProps {
  owner: Result | string | undefined;
}
const attributes = [
  {
    trait_type: "Background",
    trait_value: "---",
    trait_percent: "---",
  },
  {
    trait_type: "Clothes",
    trait_value: "---",
    trait_percent: "---",
  },
  {
    trait_type: "Eyes",
    trait_value: "---",
    trait_percent: "---",
  },
  {
    trait_type: "Mouth",
    trait_value: "---",
    trait_percent: "---",
  },
  {
    trait_type: "Fur",
    trait_value: "---",
    trait_percent: "---",
  },
  {
    trait_type: "Earring",
    trait_value: "---",
    trait_percent: "---",
  },
  {
    trait_type: "Hat",
    trait_value: "---",
    trait_percent: "---",
  },
  {
    trait_type: "Nose",
    trait_value: "---",
    trait_percent: "---",
  },
  {
    trait_type: "Neck",
    trait_value: "---",
    trait_percent: "---",
  },
  {
    trait_type: "Accessories",
    trait_value: "---",
    trait_percent: "---",
  },
  {
    trait_type: "Action",
    trait_value: "---",
    trait_percent: "---",
  },
];
const TabDetails: React.FunctionComponent<TabDetailsProps> = ({ owner }) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <p className="font-bold">Owner</p>
        <div className="flex items-center gap-3 -top-3 left-2 rounded-xl rounded-full ring-2 hover:ring-4 w-10 h-10 hover:scale-[1.05] cursor-pointer transition-all">
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
          <p>
            {hideString({
              start: 5,
              end: (owner && owner.length - 4) || 0,
              originalString: owner || "",
              replaceBy: "...",
            })}
          </p>
        </div>
      </div>
      {/* Properties */}
      <div className="flex flex-wrap gap-3">
        {attributes.map((attribute, index) => {
          return <PropertiesNFT key={index} attribute={attribute} />;
        })}
      </div>
    </>
  );
};

export default TabDetails;

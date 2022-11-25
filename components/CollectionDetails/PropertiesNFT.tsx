import React from "react";

interface PropertiesNFTProps {
  attribute: {
    trait_type: string;
    trait_value: string;
    trait_percent: string;
  };
}

const PropertiesNFT: React.FunctionComponent<PropertiesNFTProps> = ({
  attribute,
}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center border px-6 py-2 rounded bg-primary-bg bg-opacity-5">
        <div className="text-sm text-primary-color font-bold">
          {attribute.trait_type}
        </div>
        <div className="font-bold font-base"> {attribute.trait_value}</div>
        <div className="text-xs text-gray-check-box">
          {attribute.trait_percent} have this trait
        </div>
      </div>
    </>
  );
};

export default PropertiesNFT;

import Image from "next/image";
import React from "react";

interface FreshNelProps {
  nameNel: string;
  value: string;
}

const FreshNel: React.FunctionComponent<FreshNelProps> = ({
  nameNel,
  value,
}) => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex items-centers gap-2">
          <Image
            src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
            width={14}
            height={14}
          />
          <span className="font-bold text-xl">{value}</span>
        </div>
        <div className="text-sub">{nameNel}</div>
      </div>
    </>
  );
};

export default FreshNel;

import { BadgeCheckIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import useAccountWallet from "../../hooks/useAccountWallet";
import Logger from "../../lib/logger";
import { configContractNFT } from "../../models/ConfigContract";
import { hideString } from "../../utils";
interface ProfileProps {}

const Profile: React.FunctionComponent<ProfileProps> = (props) => {
  const { address } = useAccountWallet();
  const [addressUser, setAddressUser] = useState<string>("");
  useEffect(() => {
    address && setAddressUser(address);
  }, [address]);
  const { data: tokenOwnerOf } = useContractRead({
    ...configContractNFT,
    functionName: "tokensOfOwner",
    args: [address],
  });
  // console.log(
  //   "tokenOwnerOf ------------->",
  //   tokenOwnerOf?.toString().split(", ")
  // );
  // Logger.check(tokenOwnerOf);
  const [numOfTokenUser, setNumOfTokenUser] = useState<number>(0);
  const [tokensUser, setTokensUser] = useState<Array<number | string> | []>([]);
  useEffect(() => {
    if (tokenOwnerOf && tokenOwnerOf?.length !== 0) {
      const _tokensUser = tokenOwnerOf
        .toString()
        .split(",")
        .map((_) => Number(_));
      setTokensUser(_tokensUser);
      setNumOfTokenUser(_tokensUser.length);
    }
  }, [tokenOwnerOf]);
  return (
    <>
      <div className="px-5 mb-4 space-y-5 sm:px-0">
        {/*Avatar*/}
        <div className="flex items-center relative -mt-24 w-32 h-32 sm:-mt-32 sm:w-32 sm:h-32">
          <img
            width={108}
            height={108}
            src="https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&w=256"
            className="w-32 h-32 bg-gray-200 rounded-xl ring-8 ring-gray-50 sm:w-30 sm:h-30 dark:bg-gray-700 dark:ring-black"
          />
        </div>
        {/* Information */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center py-1 space-x-4">
            <div className="truncate text-4xl font-bold">
              {hideString({
                start: 5,
                end: (addressUser && addressUser.length - 4) || 0,
                originalString: addressUser || "",
                replaceBy: "...",
              })}
            </div>
            <div>
              <BadgeCheckIcon className="w-7 h-7 text-blue-400" />
            </div>
          </div>
          {/* <div className="flex items-center gap-1 text-1xl">
            By <span className="font-bold">SPS Developer</span>{" "}
            <BadgeCheckIcon className="w-4 h-4 text-blue-400" />
          </div> */}
          <div className="flex items-center gap-1 text-1xl">
            Items <span className="font-bold">{numOfTokenUser}</span> · Created{" "}
            <span className="font-bold">Aug 2022</span> · Creator fee{" "}
            <span className="font-bold">0%</span>
          </div>
          {/* <div>
            The Spark minds JSC is a collection of up to 8,000 SPARKMINDS that
            can only be created by exposing an existing Sparkminds NFT to a vial
            of Spark minds or by minting a SPARKMINDS in the public sale.
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Profile;

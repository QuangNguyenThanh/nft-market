import React, { useEffect, useState } from "react";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import useAccountWallet from "../../hooks/useAccountWallet";
import { configContractNFT, configContractMarket } from "../../models";
import NFTCard from "../Collections/NFTCard/NFTCard";
import NFTItem from "../Collections/NFTCard/NFTItem";
import { GridItemThree, GridLayout } from "../Layout/GridLayout";

interface MyCollectionsProps {}

const MyCollections: React.FunctionComponent<MyCollectionsProps> = (props) => {
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
  const [numOfTokenUser, setNumOfTokenUser] = useState<number>(0);
  const [tokensUser, setTokensUser] = useState<Array<number> | []>([]);
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
      <GridLayout>
        {tokensUser.map((token, index) => {
          return (
            <GridItemThree key={index}>
              <div className="p-3 py-5 border sm:rounded-xl">
                <NFTItem
                  item={{
                    tokenId: token,
                    imageUrl:
                      "https://testnets.opensea.io/static/images/placeholder.png",
                    creatorImg:
                      "https://storage.googleapis.com/opensea-static/opensea-profile/19.png",
                    name: `CryptoSparkminds #${token}`,
                    price: "0",
                  }}
                />
              </div>
            </GridItemThree>
          );
        })}
      </GridLayout>
    </>
  );
};

export default MyCollections;

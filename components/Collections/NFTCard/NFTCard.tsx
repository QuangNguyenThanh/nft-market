import { Result } from "ethers/lib/utils";
import React, { useEffect, useMemo, useState } from "react";
import useReadContractMarket from "../../../hooks/useReadContractMarket";
import useReadContractNFT from "../../../hooks/useReadContractNFT";
import {
  GridItemFour,
  GridItemThree,
  GridLayout,
} from "../../Layout/GridLayout";
import NFTItem from "./NFTItem";

interface NFTCardProps {}

const NFTCard: React.FunctionComponent<NFTCardProps> = (props) => {
  const totalSupply = useReadContractNFT({
    functionName: "totalSupply",
  });
  const [totalTokenOrdered, setTotalTokenOrdered] = useState<number>(0);

  useMemo(() => {
    setTotalTokenOrdered(Number(totalSupply?.toString()));
  }, [totalSupply]);

  const getAllListing = useReadContractMarket({
    functionName: "getAllListting",
    args: ["0x7086109a11eC0f81313a2D06E030DF2FdE6eC218"],
  });
  const [listTokenOrdered, setListTokenOrdered] = useState<Array<string>>([]);
  // useEffect(() => {
  //   if (getAllListing) {
  //     const _allListing = getAllListing
  //       ?.toString()
  //       .split(",")
  //       .map((_) => Number(_))
  //       .filter((item, i, ar) => ar.indexOf(item) === i);
  //     setAllListing(_allListing);
  //   }
  // }, [getAllListing]);
  useEffect(() => {
    setListTokenOrdered(Array.from({ length: totalTokenOrdered }, () => "_"));
  }, [getAllListing]);
  return (
    <>
      <GridLayout className="py-0">
        {listTokenOrdered.map((_, index) => (
          <GridItemFour key={index}>
            <div className="p-3 py-5 border sm:rounded-xl ">
              <NFTItem
                item={{
                  tokenId: index + 1,
                  imageUrl:
                    "https://testnets.opensea.io/static/images/placeholder.png",
                  creatorImg:
                    "https://storage.googleapis.com/opensea-static/opensea-profile/19.png",
                  name: `CryptoSparkminds #${index + 1}`,
                }}
              />
            </div>
          </GridItemFour>
        ))}
      </GridLayout>
    </>
  );
};

export default NFTCard;

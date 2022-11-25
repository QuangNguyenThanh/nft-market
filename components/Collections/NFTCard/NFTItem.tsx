/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import nft from "../../../public/nft.jpeg";
import HeartIcon from "@heroicons/react/outline/HeartIcon";
import avatar from "../../../public/avatar.jpg";
import { Tooltip } from "../../UI/Tooltip";
import { EyeIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useContractRead } from "wagmi";
import { configContractMarket } from "../../../models";
import Logger from "../../../lib/logger";
import { useRouter } from "next/router";
import useReadContractMarket from "../../../hooks/useReadContractMarket";
import { ethers } from "ethers";
interface NFTItemProps {
  item?: {
    tokenId?: number;
    imageUrl: string;
    creatorImg: string;
    name: string;
    price?: string;
  };
}
const address = "0x0e7416b6b5171fd311f43475865a6bcc0c6d1f74";
const id = 1;
const NFTItem: React.FunctionComponent<NFTItemProps> = ({ item }) => {
  const getListing = useReadContractMarket({
    functionName: "getListing",
    args: ["0x7086109a11eC0f81313a2D06E030DF2FdE6eC218", item?.tokenId],
  });
  const [priceNFT, setPriceNFT] = useState<number | string>("- - -");

  useEffect(() => {
    if (
      getListing &&
      getListing.seller !== "0x0000000000000000000000000000000000000000"
    ) {
      setPriceNFT(+ethers.utils.formatEther(getListing.price));
    } else {
      setPriceNFT("- - -");
    }
  }, [getListing]);
  // Logger.check(listItem);
  // console.log("configContract", configContrac11t);
  // console.log("getAllListting", contractRead);
  const router = useRouter();
  return (
    <>
      <div className="relative flex flex-col gap-2">
        <div className=" absolute -top-3 left-2 rounded-xl rounded-full ring-2 hover:ring-4 w-10 h-10 hover:scale-[1.05] cursor-pointer transition-all">
          <Tooltip placement="top" content="Owner">
            <img
              src={item?.creatorImg}
              width={40}
              height={40}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            />
          </Tooltip>
        </div>

        <div
          className="hover:scale-[1.05] cursor-pointer transition ease-in-out delay-1500"
          onClick={() => {
            router.push(
              `/collections/0x7086109a11eC0f81313a2D06E030DF2FdE6eC218/${item?.tokenId}`
            );
          }}
        >
          {/* <Link href={`/collections/${address}/${id}`}>
            <a href="">
              <Image
                src={item?.imageUrl}
                objectFit="contain"
                className="rounded-xl"
              />
            </a>
          </Link> */}
          <img src={item?.imageUrl} className="rounded-xl" />
        </div>
        <div className="font-bold text-xl">{item?.name}</div>
        <div className="font-bold text-gray-check-box">Price: </div>
        <div className="flex justify-between text-xl gap-1">
          <div className="flex items-center text-xl gap-1">
            <img
              src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
              alt="ETH"
              className="w-4 h-4"
            />

            <span className="font-bold">{priceNFT} </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <HeartIcon className="w-4 h-4 hover:text-pink-500 cursor-pointer" />
            {/* <span className="text-sm">{Math.floor(Math.random() * 100)}</span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTItem;

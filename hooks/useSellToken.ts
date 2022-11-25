import { ethers } from "ethers";
import { useEffect } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { configContractMarket } from "../models";

const useSellToken = (tokenId: any, price: string) => {
  const { config } = usePrepareContractWrite({
    ...configContractMarket,
    functionName: "listItem",
    args: [
      "0x7086109a11eC0f81313a2D06E030DF2FdE6eC218",
      tokenId,
      ethers.utils.parseEther(price),
    ],
    overrides: {
      gasLimit: 100000,
    },
    onError(error) {
      console.error("Has error = ", { error });
    },
  });
  const { write } = useContractWrite(config);
  console.log("write-------------", write);

  return write;
};

export default useSellToken;

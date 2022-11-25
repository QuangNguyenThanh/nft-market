import { useContract, useContractRead } from "wagmi";
import { configContractNFT } from "../models/ConfigContract";

const useReadContractNFT = (props: { functionName: string; args?: any }) => {
  const { data: functionName } = useContractRead({
    ...configContractNFT,
    functionName: props.functionName,
    args: props.args,
  });
  return functionName;
};

export default useReadContractNFT;

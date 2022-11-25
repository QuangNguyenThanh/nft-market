import { useContract, useContractRead } from "wagmi";
import { configContractMarket } from "../models/ConfigContract";

const useReadContractMarket = (props: { functionName: string; args: any }) => {
  const { data: functionName } = useContractRead({
    ...configContractMarket,
    functionName: props.functionName,
    args: props.args,
  });
  return functionName;
};

export default useReadContractMarket;

import contractMarket from "../contracts/contractMarket.json";
import contractNFT from "../contracts/contractNFT.json";
export type ContractConfig = {
  addressOrName: string;
  contractInterface: Array<any>;
};

export const configContractMarket: ContractConfig = {
  addressOrName: contractMarket.address,
  contractInterface: contractMarket.api,
};

export const configContractNFT: ContractConfig = {
  addressOrName: contractNFT.address,
  contractInterface: contractNFT.api,
};

import React from "react";
import { useAccount } from "wagmi";

interface ExploreProps {}

const Explore: React.FunctionComponent<ExploreProps> = (props) => {
  const { ...account } = useAccount();
  return <>Explore</>;
};

export default Explore;

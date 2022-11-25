import React from "react";
import {
  GridItemEight,
  GridItemFour,
  GridItemNight,
  GridItemTen,
  GridItemThree,
  GridItemTwo,
  GridLayout,
} from "../Layout/GridLayout";
import FilterOptionCard from "./FilterOptions/FilterOptionCard";
import NFTCard from "./NFTCard/NFTCard";

interface CollectionsProps {}

const Collections: React.FunctionComponent<CollectionsProps> = (props) => {
  return (
    <>
      <GridLayout className="py-8">
        <GridItemThree>
          {["Select Categories", "Status", "Item Type"].map((_, index) => {
            return <FilterOptionCard key={index} titleField={_} />;
          })}
        </GridItemThree>
        <GridItemNight>
          <NFTCard />
        </GridItemNight>
      </GridLayout>
    </>
  );
};

export default Collections;

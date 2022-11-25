import React from "react";
import { GridItemThree, GridLayout } from "../Layout/GridLayout";
import SellerCard from "./SellerCard";

interface TopSellerProps {}

const TopSeller: React.FunctionComponent<TopSellerProps> = (props) => {
  return (
    <>
      <section id="section-new-items" className="mt-20">
        <div className="flex flex-wrap flex-col gap-4">
          <div className="text-center text-4xl font-bold">Top Seller</div>
          <div className=" h-1 bg-primary-color w-[60px] m-auto rounded"></div>
        </div>
        <div className="mt-[40px]">
          <GridLayout>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => {
              return (
                <GridItemThree key={index}>
                  <SellerCard index={index} />
                </GridItemThree>
              );
            })}
          </GridLayout>
        </div>
      </section>
    </>
  );
};

export default TopSeller;

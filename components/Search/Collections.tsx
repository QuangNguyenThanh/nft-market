import React from "react";
import NFTItem from "../Collections/NFTCard/NFTItem";
import { GridItemThree, GridLayout } from "../Layout/GridLayout";
import NotFound from "./NotFound";

interface CollectionsProps {
  tokensUser: any;
}

const Collections: React.FunctionComponent<CollectionsProps> = ({
  tokensUser,
}) => {
  return (
    <>
      <GridLayout>
        {tokensUser.length !== 0 &&
          tokensUser.map((token: any, index: number) => {
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
      {tokensUser.length === 0 && <NotFound />}
    </>
  );
};

export default Collections;

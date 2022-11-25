import React from "react";
import NFTItem from "../Collections/NFTCard/NFTItem";

interface SlideItemProps {
  item: {
    imageUrl: string;
    creatorImg: string;
    name: string;
    price: string;
  };
}

const SlideItem: React.FunctionComponent<SlideItemProps> = ({ item }) => {
  return (
    <>
      <div className="p-3 py-5 border sm:rounded-xl ">
        <NFTItem item={item} />
      </div>
    </>
  );
};

export default SlideItem;

import React from "react";
import PhotographIcon from "@heroicons/react/outline/PhotographIcon";
import MusicNoteIcon from "@heroicons/react/outline/MusicNoteIcon";
import SearchIcon from "@heroicons/react/outline/SearchIcon";
import GlobeIcon from "@heroicons/react/outline/GlobeIcon";
import IdentificationIcon from "@heroicons/react/outline/IdentificationIcon";
import BriefcaseIcon from "@heroicons/react/outline/BriefcaseIcon";
interface BrowseByCategoryProps {}

const BrowseByCategory: React.FunctionComponent<BrowseByCategoryProps> = (
  props
) => {
  return (
    <>
      <section id="section-by-category" className="mt-20 mb-[100px]">
        <div className="flex flex-wrap flex-col gap-5">
          <div className="text-center text-4xl font-bold">
            Browse by category
          </div>
          <div className=" h-1 bg-primary-color ou w-[60px] m-auto rounded"></div>
        </div>
        <div className="flex gap-7 justify-center mt-6">
          <div className="flex gap-1 flex-col w-[166px] h-[110px] items-center justify-center bg-[#eee8e1] rounded">
            <PhotographIcon className="w-[52px]  text-primary-color" />
            <div className="font-bold">Art</div>
          </div>
          <div className="flex gap-1 flex-col w-[166px] h-[110px] items-center justify-center bg-[#eee8e1] rounded">
            <MusicNoteIcon className="w-[52px]  text-primary-color" />
            <div className="font-bold">Music</div>
          </div>
          <div className="flex gap-1 flex-col w-[166px] h-[110px] items-center justify-center bg-[#eee8e1] rounded">
            <SearchIcon className="w-[52px]  text-primary-color" />
            <div className="font-bold">Search</div>
          </div>
          <div className="flex gap-1 flex-col w-[166px] h-[110px] items-center justify-center bg-[#eee8e1] rounded">
            <GlobeIcon className="w-[52px]  text-primary-color" />
            <div className="font-bold">Virtual Worlds</div>
          </div>
          <div className="flex gap-1 flex-col w-[166px] h-[110px] items-center justify-center bg-[#eee8e1] rounded">
            <IdentificationIcon className="w-[52px]  text-primary-color" />
            <div className="font-bold">Trading Cards</div>
          </div>
          <div className="flex gap-1 flex-col w-[166px] h-[110px] items-center justify-center bg-[#eee8e1] rounded">
            <BriefcaseIcon className="w-[52px]  text-primary-color" />
            <div className="font-bold">Collectibles</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrowseByCategory;

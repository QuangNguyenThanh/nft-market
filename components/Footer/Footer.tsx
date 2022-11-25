import React from "react";
import { GridItemThree, GridLayout } from "../Layout/GridLayout";
import ArrowRightIcon from "@heroicons/react/outline/ArrowRightIcon";
interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  return (
    <>
      <div className="border"></div>
      <GridLayout className="mt-[80px] mb-[40px]">
        <GridItemThree>
          <div className="font-bold mb-4 text-lg">Marketplace</div>
          <div className="text-[#595d69]">All NFTs</div>
          <div className="text-[#595d69]">Art</div>
          <div className="text-[#595d69]">Music</div>
          <div className="text-[#595d69]">Domain Names</div>
          <div className="text-[#595d69]">Virtual World</div>
          <div className="text-[#595d69]">Collectibles</div>
        </GridItemThree>
        <GridItemThree>
          <div className="font-bold mb-4 text-lg">Resources</div>
          <div className="text-[#595d69]">Help Center</div>
          <div className="text-[#595d69]">Partners</div>
          <div className="text-[#595d69]">Suggestions</div>
          <div className="text-[#595d69]">Discord</div>
          <div className="text-[#595d69]">Docs</div>
          <div className="text-[#595d69]">Newsletter</div>
        </GridItemThree>
        <GridItemThree>
          <div className="font-bold mb-4 text-lg">Community</div>
          <div className="text-[#595d69]">Community</div>
          <div className="text-[#595d69]">Documentations</div>
          <div className="text-[#595d69]">Brand Assets</div>
          <div className="text-[#595d69]">Blog</div>
          <div className="text-[#595d69]">Forum</div>
          <div className="text-[#595d69]">Mailing List</div>
        </GridItemThree>
        <GridItemThree>
          <div className="font-bold mb-4 text-lg">Newsletter</div>
          <div className="text-[#595d69] mb-4">
            Signup for our newsletter to get the latest news in your inbox.
          </div>
          <div className="flex">
            <input placeholder="Enter your email" className="border px-2" />
            <ArrowRightIcon className="w-7 h-7 bg-primary-color text-white" />
          </div>
          <div className="text-[#595d69] text-sm mt-2">
            Your email is safe with us. We do not spam.
          </div>
        </GridItemThree>
      </GridLayout>
    </>
  );
};

export default Footer;

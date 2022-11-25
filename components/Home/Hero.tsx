import { url } from "inspector";
import React, { useEffect, useState } from "react";

import { GridItemSix, GridLayout } from "../Layout/GridLayout";
import women from "../../public/women-statue.png";
import Image from "next/image";
import Link from "next/link";
import ScrollDropDown from "./ScrollDropDown";
interface HeroProps {}

const Hero: React.FunctionComponent<HeroProps> = (props) => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  console.log("isScroll", isScroll);
  useEffect(() => {
    const handleScroll = () => {
      // console.log("window.scrollY", window.scrollY);
      if (window.scrollY > 1) {
        setIsScroll(true);
      } else if (window.scrollY === 0) {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section
        id="section-hero"
        aria-label="section"
        className="relative top-0"
      >
        <GridLayout className="relative">
          <GridItemSix className="py-[130px] px-[10px] flex flex-col gap-4 md:col-span-6">
            <h2
              className="text-white text-3xl tracking-widest mb-2"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              SPARK MINDS MARKET
            </h2>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="w-80 font-bold text-7xl text-white tracking-widest"
            >
              COLLECT YOUR SUPER RARE NFT
            </div>
            <div
              className="text-white mt-4 text-xl"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              The world largest digital marketplace.
            </div>
            <div
              className="flex flex-row gap-20 flex-wrap"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="flex flex-col">
                <div className="text-3xl font-bold text-white">8000</div>
                <div className="text-sm font-bold text-white">Collectibles</div>
              </div>
              <div className="flex flex-col">
                <div className="text-3xl font-bold text-white">27k</div>
                <div className="text-sm font-bold text-white">Auctions</div>
              </div>
              <div className="flex flex-col">
                <div className="text-3xl font-bold text-white">3k</div>
                <div className="text-sm font-bold text-white">NFT Artist</div>
              </div>
            </div>
            <Link href="/">
              <a href="">
                <button
                  data-aos="fade-left"
                  data-aos-delay="600"
                  className="rounded w-[140px] h-[30px] mt-3 btn-landing text-white outline-none"
                >
                  Explore
                </button>
              </a>
            </Link>
          </GridItemSix>
          <GridItemSix
            className="py-[110px] md:col-span-6 col-span-6"
            data-aos="flip-right"
            data-aos-delay="600"
          >
            <Image
              src={women}
              objectFit="contain"
              data-aos="flip-right"
              data-aos-delay="1000"
            />
          </GridItemSix>
        </GridLayout>
        {!isScroll && <ScrollDropDown />}
      </section>
    </>
  );
};

export default Hero;

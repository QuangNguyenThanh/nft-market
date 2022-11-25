import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import SlideItem from "./SlideItem";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
interface NewItemsProps {}
const items = [
  {
    imageUrl:
      "https://i.seadn.io/gae/vTHPAQRSkmiDn31d_6lL7L4pgRY67duXwSGub2Dt5zDD1zczKFWMgBPBVpuHpOY2TCT8fB9G8gaTQ1FETzbQ8lloBHQNKz1cm9otag?auto=format&w=384",
    creatorImg:
      "https://i.seadn.io/gcs/files/a391f9fadaa95305a3d859bcfb21fb92.gif?auto=format&w=256",
    name: "Alpha Sharks #1399",
    price: "0.28",
  },
  {
    imageUrl:
      "https://i.seadn.io/gae/ESXiB7p3-Rs3PvbLJ5th9iswmarqn36UPcbHAvKQwBeG9Q1kKutJ3lfXmeFljz4HpLs-7UOuJbHJnwlz2YBWaSbJwPsRWh2_MWpdCw?auto=format&w=384",
    creatorImg:
      "https://i.seadn.io/gcs/files/a391f9fadaa95305a3d859bcfb21fb92.gif?auto=format&w=256",
    name: "Alpha Sharks #3662",
    price: "0.30",
  },
  {
    imageUrl:
      "https://i.seadn.io/gae/YlnrHHTYeGd4znd7ChzDR8Ko4G--LQpmcHmmTRgprna664jT82ySiaOVOGuaZwGDKzCdYktRz-YkXOYm-Dz0UCP-RFd426yBsXLJ?auto=format&w=384",
    creatorImg:
      "https://i.seadn.io/gcs/files/32469815c1d8c3cbec6541f35d991adc.gif?auto=format&w=256",
    name: "The Hopeful #1355",
    price: "0.295",
  },
  {
    imageUrl:
      "https://i.seadn.io/gae/52wqSInZFnM3pKUFFbI-YgdekxP3LNPbDWz8q6oQg2FaCedLwa6cDtWNx_4-DIJZkduAuyItx3X9eKD6qEjoYJJDcF9upxY5rqSiHuk?auto=format&w=384",
    creatorImg:
      "https://i.seadn.io/gcs/files/7f3cd1b5f71225f4aab4efab5542f253.gif?auto=format&w=256",
    name: "Potatoz #3776",
    price: "1.295",
  },
  {
    imageUrl:
      "https://i.seadn.io/gae/bT4v7tHo04XI_BerptE2tshHnDOjCuoH_PpzFQagmxKac3mscm6AVY1iuC0vVPynDG7qg0Y0WWbxUeWsHGkkpGxo3_BKdIoUJgNN?auto=format&w=384",
    creatorImg:
      "https://i.seadn.io/gcs/files/7f3cd1b5f71225f4aab4efab5542f253.gif?auto=format&w=256",
    name: "Potatoz #3776",
    price: "1.2",
  },
  {
    imageUrl:
      "https://i.seadn.io/gae/TkAnOP0RDqki3rB0b7_8JSaGF-2o7dHjIxcNSiako0-G9PYcxskk3-ppi4RzJ4J50RxBrHXOvvZkDUYdsOft5U6izk09R2CdmDT6LcA?auto=format&w=384",
    creatorImg:
      "https://i.seadn.io/gcs/files/3d1f199e672d68a33f442a53153b7377.jpg?auto=format&w=256",
    name: "Lazy Ape Yacht Club #4816",
    price: "99",
  },
];
const NewItems: React.FunctionComponent<NewItemsProps> = (props) => {
  const [slideStep, setSlideStep] = useState<number>(1);
  const [visibleSlides, setVisibleSlides] = useState<number>(5);
  return (
    <>
      <section id="section-new-items" className="mt-20">
        <div className="flex flex-wrap flex-col gap-5">
          <div className="text-center text-4xl font-bold">New Items</div>
          <div className=" h-1 bg-primary-color ou w-[60px] m-auto rounded"></div>
        </div>
        <div className="px-8 mt-6">
          <CarouselProvider
            className="mt-3 relative"
            naturalSlideWidth={320}
            naturalSlideHeight={504}
            isIntrinsicHeight
            step={slideStep}
            dragStep={slideStep}
            visibleSlides={visibleSlides}
            infinite
            totalSlides={8}
            dragEnabled={true}
          >
            <Slider>
              {items.map((item, index) => {
                return (
                  <Slide key={index} index={index} className="px-3">
                    <SlideItem item={item} />
                  </Slide>
                );
              })}
            </Slider>
            <ButtonBack className="bg border rounded-full p-2 absolute top-[38%] -left-[12px] bg-white hover:ring-2 hover:scale-105 transition-all">
              <ChevronLeftIcon className="w-[25px] h-[25px]" />
            </ButtonBack>
            <ButtonNext className="bg border rounded-full p-2  absolute -right-[12px] top-[38%]  bg-white hover:ring-2 hover:scale-105 transition-all">
              <ChevronRightIcon className="w-[25px] h-[25px]" />
            </ButtonNext>
          </CarouselProvider>
        </div>
      </section>
    </>
  );
};

export default NewItems;

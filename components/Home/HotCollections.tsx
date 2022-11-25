import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import SlideHotNFT from "./SlideHotNFT";
import ChevronLeftIcon from "@heroicons/react/outline/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon";
interface HotCollectionsProps {}
const datas = [
  {
    name: "The Potatoz",
    imageAvatar:
      "https://i.seadn.io/gcs/files/7f3cd1b5f71225f4aab4efab5542f253.gif?auto=format&w=128",
    imageBanner:
      "https://i.seadn.io/gcs/files/774b6b9daa7064a64b00811b191fed00.gif?auto=format&w=1920",
  },
  {
    name: "Parallel Alpha",
    imageAvatar:
      "https://i.seadn.io/gae/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL?auto=format&w=128",
    imageBanner:
      "https://i.seadn.io/gae/MUPGu0O56o8-QMkKscE3CPifsjgt6ANAQg0hFmBC_2IZHcoRELyOcjAUCx2Mh1TDR99hxg6J36DpZfPFZVVCx2Jv5ySfrdP0Vl19?auto=format&w=1920",
  },
  {
    name: "AlphaSharks NFT",
    imageAvatar:
      "https://i.seadn.io/gcs/files/a391f9fadaa95305a3d859bcfb21fb92.gif?auto=format&w=128",
    imageBanner:
      "https://i.seadn.io/gae/Rqd68-nD1qh79_q2TcxAIUtE5CTaHPqJjH2boeD-MKTmW2KK0H4yYB9JxgMWu3uddFiyzAzdZA5MZ1TxdKVHkmg2tZXXP62UVNDqj8Y?auto=format&w=1920",
  },
  {
    name: "DeGods",
    imageAvatar:
      "https://i.seadn.io/gae/OYvE-daPlxRCqry6lJY2SaXKodbD1-2jTucE7l2iEb50no017kXDuu9uYVt44To6930sL3xtSrm3XpSedtpXbcIydIv-xK0WLIxx?auto=format&w=128",
    imageBanner:
      "https://i.seadn.io/gae/uzqI7cJDu_0ZoNrQJ73xMyEfLaDzNA42GsacWBqIuzwppZOTNsbt1nQaIrjtbIZjyM05gC3_vQnSIGalFp2HzG9dzO0FufCmCAHvaw?auto=format&w=1920",
  },
  {
    name: "Azra Games - The Hopeful",
    imageAvatar:
      "https://i.seadn.io/gcs/files/32469815c1d8c3cbec6541f35d991adc.gif?auto=format&w=128",
    imageBanner:
      "https://i.seadn.io/gcs/files/fcc35632dfe69d06e8f2f6efa9063475.gif?auto=format&w=1920",
  },
  {
    name: "KILLABEARS",
    imageAvatar:
      "https://i.seadn.io/gae/jsfhye5yrhOSusDCKXquKoMQbYs-B8Nm3V2B5fZB-Hee9ag9MXwm8scvd8wuSpp8TE49oXBcWr4XMCRfzq1OA3p59s59hn_9bCzURA?auto=format&w=128",
    imageBanner:
      "https://i.seadn.io/gae/fLc9X7D_408jQvA8np6WB7VRJKNqm8V5eHS_Ww7Xm7hdmAUXm_T3QFaUnhYOJIhyydUWZEqRIBS_9ejYevltkhZ4i5zQsENFYWMBD5M?auto=format&w=1920",
  },
  {
    name: "Super BBs",
    imageAvatar:
      "https://i.seadn.io/gcs/files/c5ed0fd34b3641f928e634aa67e6d4fa.gif?auto=format&w=128",
    imageBanner:
      "https://i.seadn.io/gcs/files/e989b2024756c3d3cd3a682ab7b94ec2.gif?auto=format&w=1920",
  },
  {
    name: "alien frens",
    imageAvatar:
      "https://i.seadn.io/gae/_zidXBb2QsMBD6OYdjED63tczeXDUr1ah7zvhSSLHQjU4BF-H-lUexkLJ76_ahmbkkItEiH738jVPG88DOFVdt4GX377cvNNgCyzFT4?auto=format&w=128",
    imageBanner:
      "https://i.seadn.io/gae/zMULfKvXxCABJYz38iRviqIcnGzFDnJjzMcm6NbuYeoO4hLL8LExLkJatwv2DzhHO2XrHHzNUxnSBxT7KVl32WEdInUJpzVaqBFMdyg?auto=format&w=1920",
  },
];
const HotCollections: React.FunctionComponent<HotCollectionsProps> = (
  props
) => {
  const [slideStep, setSlideStep] = useState<number>(1);
  const [visibleSlides, setVisibleSlides] = useState<number>(5);
  return (
    <>
      <section id="section-hot-collections" className="mt-20">
        <div className="flex flex-wrap flex-col gap-5">
          <div className="text-center text-4xl font-bold">Hot Collections</div>
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
            totalSlides={7}
            dragEnabled={true}
          >
            <Slider>
              {datas.map((data, index) => {
                return (
                  <Slide key={index} index={index} className="px-3">
                    <SlideHotNFT
                      imageBanner={data.imageBanner}
                      imageAvatar={data.imageAvatar}
                      name={data.name}
                    />
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

export default HotCollections;

"use client";

import Slider from "react-slick";
import { IoChevronBack } from "react-icons/io5";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HotDealCard } from "./";
import { useRef } from "react";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const HotDeals = () => {
  const sliderRef = useRef<any>();

  return (
    <div>
      <div className="flex justify-between items-end">
        <div className="">
          <h6 className="text-2xl font-[500] text-black">Hot Deals</h6>
          <p className="text-sm text-gray-600 mt-[2px]">
            Add new products to weekly line up
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="w-[30px] h-[30px] border border-black border-opacity-20 rounded-full
             flex justify-center items-center hover:bg-primary-500 text-gray-500 hover:text-white
             transition-all duration-300 ease-in-out"
            onClick={() => sliderRef?.current?.slickPrev()}
          >
            <IoChevronBack className="text-sm " />
          </button>

          <button
            className="w-[30px] h-[30px] border border-black border-opacity-20 rounded-full
             flex justify-center items-center hover:bg-primary-500 text-gray-500 hover:text-white
             transition-all duration-300 ease-in-out"
            onClick={() => sliderRef?.current?.slickNext()}
          >
            <IoChevronBack className="text-sm rotate-180" />
          </button>
        </div>
      </div>

      <div className="mt-4 md:border-[1px] border-primary-500 border-none rounded-md overflow-hidden">
        <Slider ref={sliderRef as any} {...settings}>
          {[0, 1, 2, 3, 4].map((data, index) => (
            <div key={index} className="md:px-0 sm:px-2 px-0">
              <HotDealCard key={index} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HotDeals;

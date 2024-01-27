/* eslint-disable @next/next/no-img-element */
"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brandData from "@/data/brandData";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const Brands = () => {
  return (
    <div className="py-10 w-full overflow-hidden">
      <div className="w-full h-[100px] border border-opacity-20 rounded ">
        <Slider {...settings}>
          {brandData?.map((image, index) => (
            <div
              key={index}
              className="h-[100px] flex justify-center items-center py-[25px]  sm:py-[15px]"
            >
              <div className="sm:h-[70px] h-[50px]">
                <img src={image} alt="brand" className="h-full object-cover" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brands;

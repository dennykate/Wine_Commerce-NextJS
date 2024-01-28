"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsRepeat } from "react-icons/bs";
import { MdOutlineShoppingCart, MdClose } from "react-icons/md";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

import { Ratings } from "@/components";
import productDetailsData from "@/data/productDetailsData";

interface PropsType {
  opened: boolean;
  close: () => void;
}

const ProductDetails = ({ opened, close }: PropsType) => {
  const [activeImage, setActiveImage] = useState<string>(
    productDetailsData?.images[0]
  );

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-screen max-h-screen h-screen z-[1000] overflow-y-auto ${
          opened ? "translate-y-0" : "-translate-y-[100%]"
        } transition-300`}
      >
        <div
          className="max-w-5xl h-auto mx-auto bg-white rounded-md flex relative md:flex-row flex-col
         md:py-0 py-10"
        >
          <button
            className="absolute sm:top-5 sm:right-5 top-6 right-6"
            onClick={close}
          >
            <MdClose className="sm:text-xl text-2xl text-black" />
          </button>

          <div
            className="lg:w-1/2 md:w-[40%] sm:w-[70%] w-full flex flex-col gap-4 items-center justify-center px-4 md:h-screen
           md:sticky static top-0"
          >
            <div className="w-[80%]">
              <Image
                src={activeImage}
                alt="product-details"
                width={1024}
                height={1024}
              />
            </div>
            <div className="w-full h-auto grid grid-cols-4 py-4 gap-2">
              {productDetailsData?.images?.map((image, index) => (
                <button
                  key={index}
                  className="border border-black border-opacity-20 hover:border-primary-500 rounded-md
                   overflow-hidden w-full"
                  onClick={() => setActiveImage(image)}
                >
                  <Image
                    src={image}
                    alt="product-details"
                    width={1024}
                    height={1024}
                    className=" object-cover w-full"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 md:w-[60%] w-full px-4 py-10 flex flex-col gap-4 h-full">
            <h6 className="text-2xl font-[500] text-black">
              Crispy Mixed Fruit chips
            </h6>

            <Ratings count={5} />

            <p className="text-lg text-gray-500">$4.00</p>

            <p className="text-sm text-gray-500">
              Healthy snacks can be an important part of your diet. They provide
              energy in the middle of the day or when you exercise. A healthy
              snack between meals can also decrease your hunger and keep you
              from overeating at meal time.
            </p>

            <div className="w-full h-[1px] bg-gray-200 my-4" />

            <div className="flex items-center gap-4">
              <p className="text-sm text-black font-[500] whitespace-nowrap">
                Weights :{" "}
              </p>

              <div className="flex items-center flex-wrap gap-2">
                {productDetailsData?.variants?.map((data, index) => (
                  <button
                    key={index}
                    className="px-3 py-[4px] text-sm font-[400] text-gray-600 border border-gray-300
               flex justify-center items-center hover:border-primary-500"
                  >
                    {data}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4   mt-2">
              <div
                className="flex items-center h-[50px] border border-black border-opacity-20 
              rounded-sm  overflow-hidden min-w-[120px]"
              >
                <button
                  className="w-[30px] text-xl hover:bg-primary-500 text-black hover:text-white h-full 
                flex justify-center items-center transition-300 "
                >
                  -
                </button>
                <input
                  className="w-[60px] h-full border-r border-l border-black border-opacity-20 px-[25px]"
                  defaultValue={1}
                />
                <button
                  className="w-[30px] text-xl hover:bg-primary-500 text-black hover:text-white h-full 
                flex justify-center items-center transition-300"
                >
                  +
                </button>
              </div>

              <button
                className="h-[50px] w-[200px] hover:bg-primary-500 text-black hover:text-white
               font-semibold border border-black border-opacity-80 rounded-sm transition-300
               hover:border-primary-500 "
              >
                Add To Cart
              </button>

              <button
                className="h-[50px] w-[50px] hover:bg-primary-500 text-black hover:text-white
               font-semibold border border-black border-opacity-20 rounded-sm transition-300
               hover:border-primary-500 flex justify-center items-center text-lg"
              >
                <BsRepeat />
              </button>

              <button
                className="h-[50px] w-[50px] hover:bg-primary-500 text-black hover:text-white
               font-semibold border border-black border-opacity-20 rounded-sm transition-300
               hover:border-primary-500 flex justify-center items-center text-lg"
              >
                <IoIosHeartEmpty />
              </button>
            </div>

            <button
              className="w-full h-[50px] bg-black text-white flex items-center justify-center rounded-sm
            gap-2 mt-2 hover:bg-primary-500 transition-300"
            >
              <MdOutlineShoppingCart className="text-white text-xl" />
              <p className="text-base font-bold text-white">Buy Now</p>
            </button>

            <div className="w-full h-[1px] bg-gray-200 my-4" />

            <div className="flex items-center gap-4">
              <p className="text-sm text-black font-[500]">Share : </p>

              <div className="flex items-center gap-4">
                <button>
                  <ImFacebook
                    className="text-gray-400 text-lg hover:text-primary-500
                   transition-300"
                  />
                </button>

                <button>
                  <ImTwitter
                    className="text-gray-400 text-lg hover:text-primary-500
                   transition-300"
                  />
                </button>

                <button>
                  <FaInstagram
                    className="text-gray-400 text-lg hover:text-primary-500
                   transition-300"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-screen h-screen z-[100] bg-black bg-opacity-20 ${
          opened ? "block" : "hidden"
        }`}
      />
    </>
  );
};

export default ProductDetails;

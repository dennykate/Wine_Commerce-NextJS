"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsRepeat } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

import ProductDetails from "../productDetails/ProductDetails";
import { Ratings } from "@/components";

const ProductCard = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <>
      <div className="p-2 border border-gray-200 rounded-md hover:border-primary-500 group overflow-hidden">
        <div className="w-full relative">
          <Image
            src="https://ecolife.posthemes.com/demo1/58-home_default/solimo-premium-raisins.jpg"
            alt="product-1"
            width={1024}
            height={1024}
            className="absolute top-0 left-0 opacity-0 group-hover:opacity-100
           transition-all duration-700 ease-in-out"
          />

          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <button
              className="w-[50px] h-[50px] flex bg-white justify-center items-center
            rounded-full text-black hover:bg-primary-500 hover:text-white transition-all
            duration-300 ease-in-out shadow-md border border-black border-opacity-20
            scale-0 group-hover:scale-100"
              onClick={() => setShowDetails(true)}
            >
              <IoSearch className="text-xl " />
            </button>
          </div>

          <Image
            src="https://ecolife.posthemes.com/demo1/99-home_default/organic-fruit-snacks.jpg"
            alt="product-1"
            width={1024}
            height={1024}
          />

          <div
            className="absolute top-0 left-0 px-[4px] py-[2px] bg-primary-500 text-white text-[10px] 
        font-[500] rounded-sm"
          >
            New Product
          </div>
        </div>

        <div className="w-full py-4 px-[4px] flex flex-col gap-2">
          <p className="text-[11px] text-gray-500 uppercase">Manufacture 1</p>

          <h6 className="text-base text-black font-[500]">
            Crispy Mixed Fruit chips
          </h6>

          <Ratings count={5} />

          <div className="mt-2 relative w-full ">
            <div className="flex items-center gap-2 ">
              {/* <p className="text-sm text-black">$4</p> */}
              <p className="text-sm text-gray-500 line-through">$4</p>
              <div className="flex items-center gap-[4px]">
                <p className="text-sm text-red-600">
                  ${(4 / (15 / 100)).toFixed(2)}
                </p>
                <div className="py-[1px] px-[2px] bg-red-600 text-white rounded text-xs font-[500]">
                  -15%
                </div>
              </div>
            </div>

            <div
              className="flex items-center justify-between w-full absolute top-0 left-0
          bg-white translate-y-[30px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100
          transition-all duration-200 ease-in-out"
            >
              <button className="text-sm font-[500] text-gray-800 uppercase pb-[6px] border-b-[2px] border-gray-800">
                Add to cart
              </button>

              <div className="flex items-center gap-4">
                <button>
                  <IoIosHeartEmpty className="text-lg" />
                </button>
                <button>
                  <BsRepeat className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductDetails
        opened={showDetails}
        close={() => setShowDetails(false)}
      />
    </>
  );
};

export default ProductCard;

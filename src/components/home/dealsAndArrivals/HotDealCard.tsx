"use client";

import Image from "next/image";
import { IoSearch } from "react-icons/io5";

import { Ratings } from "@/components";
import { CountDown } from "./";
import { ProductCardType } from "@/types";

interface PropsType {
  data: ProductCardType;
}

const HotDealsCard = ({ data }: PropsType) => {
  return (
    <>
      <div className="p-2 border rounded-md border-primary-500 group overflow-hidden">
        <div className="w-full relative">
          <Image
            src={
              data?.backImage ||
              "https://ecolife.posthemes.com/demo1/99-home_default/organic-fruit-snacks.jpg"
            }
            alt="product-1"
            width={1024}
            height={1024}
            className="absolute top-0 left-0 opacity-0 group-hover:opacity-100
           transition-all duration-700 ease-in-out"
          />

          <Image
            src={
              data?.frontImage ||
              "https://ecolife.posthemes.com/demo1/58-home_default/solimo-premium-raisins.jpg"
            }
            alt="product-1"
            width={1024}
            height={1024}
          />

          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <button
              name="search-button"
              className="w-[50px] h-[50px] flex bg-white justify-center items-center
            rounded-full text-black hover:bg-primary-500 hover:text-white transition-all
            duration-300 ease-in-out shadow-md border border-black border-opacity-20
            scale-0 group-hover:scale-100"
            >
              <IoSearch className="text-xl " />
            </button>
          </div>

          <div
            className="absolute top-0 left-0 px-[4px] py-[2px] bg-primary-500 text-white text-[10px] 
        font-[500] rounded-sm"
          >
            New Product
          </div>
        </div>

        <div className="w-full py-4 px-[4px] flex flex-col items-center gap-2">
          <p className="text-[11px] text-gray-500 uppercase">Manufacture 1</p>

          <h6 className="text-base text-black font-[500]">
            {data?.name || "Crispy Mixed Fruit chips"}
          </h6>

          <Ratings count={5} />

          <div className="mt-2 relative ">
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
          </div>

          <button
            name="add-to-cart"
            className="text-sm font-[500] mt-2 bg-black text-white w-full py-3 rounded-sm
           hover:bg-primary-500 transition-300"
          >
            Add to cart
          </button>

          <p className="text-sm text-gray-500 mt-2">Hurry up! Offer ends in:</p>

          <CountDown />
        </div>
      </div>
    </>
  );
};

export default HotDealsCard;

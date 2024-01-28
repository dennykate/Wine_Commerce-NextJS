import Image from "next/image";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

import { CartTableItem } from "./";
import getProductDummyData from "@/utilities/getProductDummyData";

const CartTable = () => {
  return (
    <>
      <div className="w-full border-b py-4 flex items-center">
        <div className="flex justify-start sm:w-[40%] w-[30%]">
          <p className="sm:text-lg text-base text-black font-[500] ml-4">
            Item
          </p>
        </div>

        <div className="flex justify-start w-[20%]">
          <p className="sm:text-lg text-base text-black font-[500]">Price</p>
        </div>

        <div className="flex justify-start sm:w-[20%] w-[30%]">
          <p className="sm:text-lg text-base text-black font-[500]">Qty</p>
        </div>

        <div className="flex justify-start w-[20%]">
          <p className="sm:text-lg text-base text-black font-[500]">
            Total Price
          </p>
        </div>
      </div>

      {getProductDummyData(8).map((data, index) => (
        <CartTableItem key={index} data={data} />
      ))}
    </>
  );
};

export default CartTable;

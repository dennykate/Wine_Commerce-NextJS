import { ProductCardType } from "@/types";
import Image from "next/image";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

interface PropsType {
  data: ProductCardType;
}

const CartTableItem = ({ data }: PropsType) => {
  return (
    <div className="w-full border-b py-4 flex items-center">
      <div className="flex justify-start items-center sm:w-[40%] w-[30%] gap-2 ">
        <div className="sm:w-[100px] w-[80px] sm:h-[100px] h-[80px]">
          <Image
            src={data.frontImage}
            alt="product"
            width={1024}
            height={1024}
            objectFit="cover"
          />
        </div>

        <div className="sm:flex hidden flex-col gap-2 items-start text-sm w-[calc(100%-100px)] overflow-hidden">
          <p className="font-[500] text-black truncate text-wrap w-full">
            {data.name}
          </p>

          <p className="text-xs text-gray-500">
            <span className="text-black">Weight :</span>
            <span>100g</span>
          </p>
        </div>
      </div>

      <div className="flex justify-start w-[20%]">
        <p className="text-sm text-black font-[500]">$4.00</p>
      </div>

      <div className="flex justify-start sm:w-[20%] w-[30%]">
        <div className="h-[40px] flex items-center">
          <input
            type="text"
            defaultValue={1}
            className="w-[50px] h-full px-4 border border-black border-opacity-20"
          />
          <div className="flex flex-col">
            <button
              className="w-[20px] h-[20px] border border-black border-opacity-20 flex 
        justify-center items-center text-xs"
            >
              <IoChevronUp />
            </button>
            <button
              className="w-[20px] h-[20px] border border-black border-opacity-20 flex 
        justify-center items-center text-xs"
            >
              <IoChevronDown />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-start w-[20%]">
        <p className="text-sm text-black font-[700]">$4.00</p>
      </div>
    </div>
  );
};

export default CartTableItem;

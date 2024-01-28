import Image from "next/image";
import { Ratings } from "@/components";
import { ProductCardType } from "@/types";

interface PropsType {
  data: ProductCardType;
}

const FeatureProductCard = ({ data }: PropsType) => {
  return (
    <div
      className="min-h-[120px] p-4 border border-gray-200 rounded-md hover:border-primary-500 
  group overflow-hidden flex gap-2"
    >
      <div className="h-full min-w-[92px] w-[92px] relative">
        <Image
          src={data?.backImage}
          alt={data?.name}
          width={1024}
          height={1024}
          className="absolute top-0 left-0 opacity-0 group-hover:opacity-100
           transition-all duration-700 ease-in-out"
        />

        <Image
          src={data?.frontImage}
          alt={data?.name}
          width={1024}
          height={1024}
        />
      </div>

      <div className="flex flex-col items-start gap-[6px] w-[calc(100%-104px)] bg-red-300justify-center overflow-hidden">
        <p className="text-[10px] text-gray-500 uppercase ">Manufacture 1</p>

        <h6 className="text-sm text-black font-[500] truncate  w-full">
          {data?.name}
        </h6>

        <Ratings count={5} />

        <div className="flex items-center gap-2 ">
          {/* <p className="text-sm text-black">$4</p> */}
          <p className="text-xs text-gray-500 line-through">$4</p>
          <div className="flex items-center gap-[4px]">
            <p className="text-xs text-red-600">
              ${(4 / (15 / 100)).toFixed(2)}
            </p>
            <div className="py-[1px] px-[2px] bg-red-600 text-white rounded text-xs font-[500]">
              -15%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProductCard;

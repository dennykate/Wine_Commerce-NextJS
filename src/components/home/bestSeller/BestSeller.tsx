"use client";

import { ProductCard } from "@/components/index";
import useGetWindowWidth from "@/hooks/use-get-window-width";
import getProductDummyData from "@/utilities/getProductDummyData";

const BestSeller = () => {
  const windowWidth = useGetWindowWidth();

  return (
    <div className="py-10">
      <div className="">
        <h6 className="text-2xl font-[500] text-black">Best Seller</h6>
        <p className="text-sm text-gray-600 mt-[2px]">
          Add bestselling products to weekly line up
        </p>
      </div>

      <div className="mt-4 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2 sm:gap-4">
        {getProductDummyData(windowWidth < 600 ? 6 : 5).map((data, index) => (
          <ProductCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;

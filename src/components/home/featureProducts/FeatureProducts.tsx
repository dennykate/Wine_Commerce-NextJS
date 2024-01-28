import { FeatureProductCard } from "@/components";
import getProductDummyData from "@/utilities/getProductDummyData";

const FeatureProducts = () => {
  return (
    <div className="py-10">
      <div className="">
        <h6 className="text-2xl font-[500] text-black">Featured Products</h6>
        <p className="text-sm text-gray-600 mt-[2px]">
          Add hot products to weekly line up
        </p>
      </div>

      <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {getProductDummyData(8).map((data,index) => (
          <FeatureProductCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;

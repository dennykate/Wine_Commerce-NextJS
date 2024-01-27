import { FeatureProductCard } from "@/components";

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
        {[0, 1, 2, 3, 4, 5, 6, 7].map((data) => (
          <FeatureProductCard key={data} />
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;

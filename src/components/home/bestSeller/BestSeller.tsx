import { ProductCard } from "@/components/index";

const BestSeller = () => {
  return (
    <div className="py-10">
      <div className="">
        <h6 className="text-2xl font-[500] text-black">Best Seller</h6>
        <p className="text-sm text-gray-600 mt-[2px]">
          Add bestselling products to weekly line up
        </p>
      </div>

      <div className="mt-4 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {[0, 1, 2, 3, 4].map((index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;

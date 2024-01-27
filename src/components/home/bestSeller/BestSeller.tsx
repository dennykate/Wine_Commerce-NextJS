import { ProductCard } from "@/components/index";

const BestSeller = () => {
  return (
    <div className="py-10">
      <div className="">
        <h6 className="text-xl font-[500] text-black">Best Seller</h6>
        <p className="text-sm text-gray-500 mt-[2px]">
          Add bestselling products to weekly line up
        </p>
      </div>

      <div className="mt-4 grid grid-cols-5">
        <ProductCard />
      </div>
    </div>
  );
};

export default BestSeller;

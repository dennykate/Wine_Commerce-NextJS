import { ProductCard } from "@/components";

const NewArrivals = () => {
  return (
    <div>
      <div className="">
        <h6 className="text-2xl font-[500] text-black">New Arrivals</h6>
        <p className="text-sm text-gray-600 mt-[2px]">
          Add new products to weekly line up
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((data, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;

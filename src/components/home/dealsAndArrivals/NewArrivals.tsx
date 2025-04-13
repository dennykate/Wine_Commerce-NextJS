import { ProductCard } from "@/components";
import getProductDummyData from "@/utilities/getProductDummyData";

const NewArrivals = () => {
  return (
    <div>
      <div className="">
        <h6 className="text-2xl font-[500] text-black">New Arrivals</h6>
        <p className="text-sm text-gray-600 mt-[2px]">
          Add new products to weekly line up
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2 sm:gap-4 mt-4">
        {getProductDummyData(8).map((data, index) => (
          <ProductCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;

import { ProductCard } from "@/components/index";
import getProductDummyData from "@/utilities/getProductDummyData";

const RecentlyAdded = () => {
  return (
    <div className="py-10">
      <div className="">
        <h6 className="text-2xl font-[500] text-black">Recently Added</h6>
        <p className="text-sm text-gray-600 mt-[2px]">
          Recently added to weekly line up
        </p>
      </div>

      <div className="mt-4 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {getProductDummyData(5).map((data, index) => (
          <ProductCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;

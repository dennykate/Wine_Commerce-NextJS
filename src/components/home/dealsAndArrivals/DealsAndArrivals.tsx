import { NewArrivals, HotDeals } from "./";

const DealsAndArrivals = () => {
  return (
    <div className="py-10 flex items-start md:gap-4 gap-10 md:flex-row flex-col">
      <div className="md:w-[35%] w-full">
        <HotDeals />
      </div>

      <div className="md:w-[65%] w-full">
        <NewArrivals />
      </div>
    </div>
  );
};

export default DealsAndArrivals;

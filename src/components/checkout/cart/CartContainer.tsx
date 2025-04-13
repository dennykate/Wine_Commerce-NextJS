import Link from "next/link";
import CartTable from "./CartTable";

const CartContainer = () => {
  return (
    <div className="lg:w-[70%] w-full">
      {/* <p className="text-sm text-gray-700">
        There are no more items in your cart.
      </p> */}

      <CartTable />

      <div className="flex justify-end">
        <Link
          href="/"
          className="text-sm font-[500] mt-4 bg-black text-white py-3 rounded-sm
           hover:bg-primary-500 transition-300 w-[180px] flex justify-center items-center"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartContainer;

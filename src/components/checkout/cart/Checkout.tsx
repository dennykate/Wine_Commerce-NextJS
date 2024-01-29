import Image from "next/image";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdDeliveryDining, MdSecurity } from "react-icons/md";

const Checkout = () => {
  return (
    <div className="lg:w-[30%] md:w-[50%] w-full">
      <div className="border border-opacity-20 bg-gray-50 rounded-md p-4 flex flex-col gap-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-sm">0 items</p>
          <p className="text-sm">$0.00</p>
        </div>

        <div className="w-full flex items-center justify-between">
          <p className="text-sm">Total (tax excl.)</p>
          <p className="text-base font-[500]">$0.00</p>
        </div>

        <div className="w-full flex items-center justify-between">
          <p className="text-base font-[500]">Total (tax excl.)</p>
          <p className="text-base font-[500]">$0.00</p>
        </div>

        <p className="text-sm ">Taxes: $0.00</p>

        <button
        name="checkout"
          className="text-sm font-[500] mt-4 bg-black text-white w-full py-3 rounded-sm
           hover:bg-primary-500 transition-300"
        >
          Checkout
        </button>
      </div>

      <div className="my-4 text-sm px-2 flex flex-col gap-2">
        <div className="flex items-start gap-4 text-sm">
          <div>
            <LiaShippingFastSolid className="text-xl" />
          </div>

          <div className="flex items-start gap-2">
            <p className="font-[500] text-black whitespace-nowrap">
              Free Shipping & Returns :
            </p>
            <p className="text-gray-600">On all orders over $99</p>
          </div>
        </div>

        <div className="flex items-start gap-4 text-sm">
          <div>
            <MdDeliveryDining className="text-xl" />
          </div>

          <div className="flex items-start gap-2">
            <p className="font-[500] text-black whitespace-nowrap">
              Estimated Delivery :
            </p>
            <p className="text-gray-600">Usually dispatched within 24 hours</p>
          </div>
        </div>

        <div className="flex items-start gap-4 text-sm">
          <div>
            <MdSecurity className="text-xl" />
          </div>

          <div className="flex items-start gap-2">
            <p className="font-[500] text-black whitespace-nowrap">
              Security Policy :
            </p>
            <p className="text-gray-600">
              Be secure for a system, organization or other entity
            </p>
          </div>
        </div>
      </div>

      <div className="border border-opacity-20 bg-gray-50 rounded-md flex flex-col gap-4 items-center py-10">
        <div className="w-[200px]">
          <Image
            src="/assets/images/payment.png"
            alt=""
            width={1024}
            height={512}
          />
        </div>
        <p className="text-sm">Guarantee safe & secure checkout</p>
      </div>
    </div>
  );
};

export default Checkout;

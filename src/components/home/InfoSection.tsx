import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { ImLoop } from "react-icons/im";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdWifiCalling3 } from "react-icons/md";
import InfoCard from "./InfoCard";
const InfoSection = () => {
  const data = [
    {
      Icon: LiaShippingFastSolid,
      title: "Free Shipping",
      description: "On all orders over $75.00",
    },
    {
      Icon: ImLoop,
      title: "Free Returns",
      description: "Returns are free within 9 days",
    },
    {
      Icon: RiSecurePaymentLine,
      title: "100% Payment Secure",
      description: "Your payment are safe with us.",
    },
    {
      Icon: MdWifiCalling3,
      title: "Support 24/7",
      description: "Contact us 24 hours a day",
    },
  ];
  return (
    <section className="w-full py-10">
      <div className="w-full p-8 border rounded-md grid md:grid-cols-4 grid-cols-1 md:gap-0 gap-7">
        {data?.map(({ Icon, title, description }, i: number) => (
          <InfoCard
            Icon={Icon}
            title={title}
            description={description}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default InfoSection;

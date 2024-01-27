import Image from "next/image";
import React from "react";

const BannerSection = () => {
  return (
    <div className="py-10">
      <div className="w-full flex md:flex-row flex-col gap-5 ">
        <div className="md:w-[25%] w-full overflow-hidden">
          <div className="">
            <Image
              src="https://ecolife.posthemes.com/demo1/img/cms/1_1.jpg"
              width={1024}
              height={512}
              alt=""
              className="w-full hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
        <div className="md:w-[50%] w-full overflow-hidden">
          <div className="md:h-[315px] h-full">
            <Image
              src="https://ecolife.posthemes.com/demo1/img/cms/2_1.jpg"
              width={1024}
              height={512}
              alt=""
              className="w-full h-full hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>
        </div>

        <div className="md:w-[25%] w-full overflow-hidden">
          <div className="">
            <Image
              src="https://ecolife.posthemes.com/demo1/img/cms/3_1.jpg"
              width={1024}
              height={512}
              alt=""
              className="w-full hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

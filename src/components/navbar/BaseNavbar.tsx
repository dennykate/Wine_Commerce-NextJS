import { CSSProperties } from "react";
import { IoChevronDown, IoSearch } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { RiCustomerService2Line, RiHandbagLine } from "react-icons/ri";
import Image from "next/image";
import navbarData from "@/data/navbarData";

interface PropsType {
  className: CSSProperties | string;
  open: () => void;
}

const BaseNavbar = ({ className, open }: PropsType) => {
  return (
    <div className={`${className}`}>
      <div className="md:hidden flex sm:gap-6 gap-4">
        <button onClick={open}>
          <FaBarsStaggered className="sm:text-2xl text-xl text-black" />
        </button>

        <button>
          <IoSearch className="sm:text-2xl text-xl text-black" />
        </button>
      </div>

      <div className="md:flex hidden items-center gap-6 ">
        <div className="w-[120px]">
          <Image
            src={"/assets/images/logo_footer.png"}
            alt="logo"
            width={1024}
            height={512}
            className="w-full object-cover"
          />
        </div>
        {navbarData?.map((data, index) => (
          <button
            key={index}
            className={`flex items-center gap-[2px] border-b-2  ${
              index === 0
                ? "border-primary-500 text-primary-500"
                : "border-transparent hover:border-primary-500 hover:text-primary-500"
            }`}
          >
            <p className="text-sm font-[500]">{data?.name}</p>
            {data?.hasChildren && <IoChevronDown className="text-sm" />}
          </button>
        ))}
      </div>

      <div className="w-[120px] md:hidden block">
        <Image
          src={"/assets/images/logo_footer.png"}
          alt="logo"
          width={1024}
          height={512}
          className="w-full object-cover"
        />
      </div>

      <div className="flex items-center sm:gap-6 gap-4">
        <button
          className="w-[40px] h-[40px] bg-primary-500 md:flex hidden justify-center items-center 
    rounded-full"
        >
          <IoSearch className="text-lg text-white" />
        </button>

        <button className="md:flex hidden items-end gap-[6px]">
          <RiCustomerService2Line className="text-black text-3xl" />

          <div className="flex flex-col items-start">
            <p className="text-sm">Call Us:</p>
            <p className="text-sm">+959 964470356</p>
          </div>
        </button>

        <button>
          <FaRegUserCircle className="sm:text-3xl text-2xl text-black" />
        </button>

        <button className="relative ">
          <RiHandbagLine className="sm:text-3xl text-2xl text-black" />

          <div
            className="py-[2px] px-[6px] rounded-full bg-primary-500 absolute -bottom-[6px] -right-[6px]
    text-white text-[10px] font-[500]"
          >
            0
          </div>
        </button>
      </div>
    </div>
  );
};

export default BaseNavbar;

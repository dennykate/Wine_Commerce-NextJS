"use client";

import { useState } from "react";
import { IoChevronDown, IoSearch } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { RiCustomerService2Line, RiHandbagLine } from "react-icons/ri";

import navbarData from "@/data/navbarData";
import NavbarInfo from "./navbar/NavbarInfo";
import { Sidebar } from "./sidebar";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <NavbarInfo />

      <Sidebar open={open} close={() => setOpen(false)} />

      <div className="w-full sm::h-[80px] h-[60px] bg-white flex items-center justify-between px-4">
        <div className="md:hidden flex sm:gap-6 gap-4">
          <button onClick={() => setOpen(true)}>
            <FaBarsStaggered className="sm:text-2xl text-xl text-black" />
          </button>

          <button>
            <IoSearch className="sm:text-2xl text-xl text-black" />
          </button>
        </div>

        <div className="md:flex hidden items-center gap-6 ">
          {navbarData?.map((data, index) => (
            <button key={index} className="flex items-center gap-[2px]">
              <p className="text-sm font-[500]">{data?.name}</p>
              {data?.hasChildren && <IoChevronDown className="text-sm" />}
            </button>
          ))}
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
    </>
  );
};

export default Navbar;

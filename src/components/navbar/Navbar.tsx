"use client";

import { useState } from "react";

import { NavbarInfo, BaseNavbar } from "./";
import { Sidebar } from "../sidebar";
import useScrollOffset from "@/hooks/useScrollOffset";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const scrollOffset = useScrollOffset();

  return (
    <>
      <NavbarInfo />

      <Sidebar open={open} close={() => setOpen(false)} />

      <BaseNavbar
        className="w-full bg-white flex items-center sm:h-[100px] h-[60px] justify-between px-4 "
        open={() => setOpen(true)}
      />

      <BaseNavbar
        className={`w-full bg-white border-b border-black border-opacity-5 shadow-sm flex items-center sm:h-[80px] h-[60px] justify-between px-4 fixed top-0 
        left-0 z-[100] ${
          scrollOffset > 400
            ? "translate-y-0 opacity-100"
            : "translate-y-[-100%] opacity-0"
        } transition-300`}
        open={() => setOpen(true)}
      />
    </>
  );
};

export default Navbar;

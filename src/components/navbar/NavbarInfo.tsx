"use client";

import { IoChevronDown } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoIosGitCompare, IoIosHeartEmpty } from "react-icons/io";

const NavbarInfo = () => {
  return (
    <div className="w-full h-[40px] bg-[#253237] md:flex hidden justify-between items-center px-4">
      <p className="text-sm text-white">Welcome you to Ecolife store!</p>

      <div className="flex items-center">
        <div className="lg:px-6 px-4 flex items-center gap-2">
          <FiUser className="text-sm text-white" />
          <p className="text-xs text-white">Sign In</p>
        </div>

        <div className="lg:px-6 px-4 flex items-center gap-2 border-l border-white">
          <IoIosGitCompare className="text-sm text-white" />
          <p className="text-xs text-white">Compare ( 0 )</p>
        </div>

        <div className="lg:px-6 px-4 flex items-center gap-2 border-l border-white">
          <IoIosHeartEmpty className="text-sm text-white" />
          <p className="text-xs text-white">Wishlist ( 0 )</p>
        </div>

        <div className="lg:px-6 px-4 flex items-center gap-1 border-l border-white">
          <p className="text-xs text-white">$ USD</p>
          <IoChevronDown className="text-xs text-white" />
        </div>

        <div className="pl-6 flex items-center gap-1 border-l border-white">
          <p className="text-xs text-white">English</p>
          <IoChevronDown className="text-xs text-white" />
        </div>
      </div>
    </div>
  );
};

export default NavbarInfo;

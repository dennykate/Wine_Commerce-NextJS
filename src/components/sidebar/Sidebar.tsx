"use client";

import { MdClose } from "react-icons/md";

import navbarData from "@/data/navbarData";

interface PropsType {
  open: boolean;
  close: () => void;
}

const Sidebar = ({ open, close }: PropsType) => {
  return (
    <>
      <div
        className={`max-w-[300px] min-w-[300px]  bg-white py-6 px-4 z-[1000] fixed top-0 left-0 h-screen ${
          open ? "translate-x-0" : "-translate-x-[100%]"
        } transition-300
      `}
      >
        <div className="w-full flex items-center justify-end">
          <button onClick={close} name="close-btn">
            <MdClose className="text-2xl text-black" />
          </button>
        </div>

        <div className="w-full flex flex-col items-start">
          {navbarData?.map((data, index) => (
            <div
              key={index}
              className={`w-full py-4 flex items-center gap-2 ${
                index === 0
                  ? "border-primary-500 border-b-2 text-primary-500"
                  : "border-b  border-black border-opacity-20 text-black"
              }`}
            >
              <p className="text-base ">{data?.name}</p>

              {data?.hasChildren && (
                <div className="py-1 px-3 bg-red-700 text-white rounded-md text-xs font-[500]">
                  Hot
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`w-screen h-screen fixed top-0 left-0 z-[200] bg-black bg-opacity-20
      ${open ? "block" : "hidden"}`}
      />
    </>
  );
};

export default Sidebar;

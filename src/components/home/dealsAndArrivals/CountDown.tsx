import React from "react";

const CountDown = () => {
  return (
    <div className="flex items-start ">
      <div className=" flex flex-col items-center">
        <p className="text-xl text-black font-[500]">21</p>
        <p className="text-xs text-gray-500">Days</p>
      </div>

      <p className="text-xl text-black font-[500] mx-2">:</p>

      <div className=" flex flex-col items-center">
        <p className="text-xl text-black font-[500]">10</p>
        <p className="text-xs text-gray-500">Hours</p>
      </div>

      <p className="text-xl text-black font-[500] mx-2">:</p>

      <div className=" flex flex-col items-center">
        <p className="text-xl text-black font-[500]">28</p>
        <p className="text-xs text-gray-500">Mins</p>
      </div>

      <p className="text-xl text-black font-[500] mx-2">:</p>

      <div className=" flex flex-col items-center">
        <p className="text-xl text-black font-[500]">51</p>
        <p className="text-xs text-gray-500">Secs</p>
      </div>
    </div>
  );
};

export default CountDown;

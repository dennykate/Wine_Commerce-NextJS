import Image from "next/image";
import React from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
interface PropsType {
  title: string;
  quantity: number;
  image: string;
}

const CategoryCard = ({ title, quantity, image }: PropsType) => {
  return (
    <div className="w-full h-[170px] bg-gray-100 flex group overflow-hidden relative">
      <div className="text-section absolute top-0 left-0 p-10 z-10 flex flex-col gap-3">
        <a
          href="#"
          className="hover:text-primary-500 text-gray-900 font-semibold text-lg"
        >
          {title}
        </a>
        <p className="text-gray-600 text-sm">{quantity} products</p>
        <button className="flex gap-1 text-sm items-center hover:translate-x-2 hover:text-primary-500 transition-all duration-200 ease-in-out">
          View all
          <IoMdArrowDroprightCircle className="text-primary-500" size={15} />
        </button>
      </div>
      <div className="w-full h-full">
        <Image
          src={image}
          alt=""
          width={1024}
          height={512}
          className="object-cover w-full h-full 
          group-hover:scale-105 transition-all duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default CategoryCard;

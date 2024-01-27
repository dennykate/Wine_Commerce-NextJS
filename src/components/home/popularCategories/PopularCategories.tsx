import CategoryCard from "@/components/categoryCard/CategoryCard";
import categories from "@/data/categoryData";
import React from "react";

const PopularCategories = () => {
  return (
    <div className="py-10">
      <div className="">
        <h6 className="text-2xl font-[500] text-black">Popular Categories</h6>
        <p className="text-sm text-gray-600 mt-[2px]">
          Add bestselling products to weekly line up
        </p>
      </div>

      <div className="mt-4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-5">
        {categories?.map(({ title, quantity, image }, i) => (
          <CategoryCard
            key={i}
            title={title}
            quantity={quantity}
            image={image}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;

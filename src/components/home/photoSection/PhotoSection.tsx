import Image from "next/image";
import React from "react";

const PhotoSection = () => {
  return (
    <section className="photo-section py-10">
      <div className="w-full h-full group overflow-hidden">
        <Image
          src="/assets/images/photo_section.jpg"
          alt=""
          width={1024}
          height={512}
          className="object-cover w-full h-full 
          group-hover:scale-105 transition-all duration-200 ease-in-out"
        />
      </div>
    </section>
  );
};

export default PhotoSection;

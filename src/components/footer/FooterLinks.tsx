import React from "react";

interface PropsType {
  data: {
    name: string;
  }[];
}

const FooterLinks = ({ data }: PropsType) => {
  return (
    <div className="py-5 flex flex-col gap-5 items-start">
      {data?.map(({ name }, i) => (
        <button
          key={i}
          className=" text-gray-600 hover:text-[#4FB68D] hover:translate-x-2 transition-all 
          duration-200 ease-in-out text-sm text-start"
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default FooterLinks;

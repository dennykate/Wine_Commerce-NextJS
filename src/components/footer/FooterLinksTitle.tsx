import React from "react";

interface PropsType {
  title: string;
}
const FooterLinksTitle = ({ title }: PropsType) => {
  return (
    <>
      <p className="font-semibold text-[18px]">{title}</p>
      <div className="w-full h-[1px] bg-gray-300 rounded-full">
        <div className="h-[2px] w-[20%] bg-[#4FB68D] -translate-y-[1px]" />
      </div>
    </>
  );
};

export default FooterLinksTitle;

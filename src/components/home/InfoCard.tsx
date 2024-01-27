import React from "react";
import { IconType } from "react-icons";

interface PropsType {
  Icon: IconType;
  title: string;
  description: string;
  key: number;
}
const InfoCard = ({ Icon, title, description, key }: PropsType) => {
  return (
    <div key={key} className="w-full flex md:flex-row flex-col gap-4 items-center">
      <Icon className="text-gray-700 md:text-[40px] text-[30px]" />
      <div className="text-section md:text-left text-center">
        <p className="font-semibold text-base mb-1 text-gray-700">{title}</p>
        <p className="text-gray-400 text-[14px]">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;

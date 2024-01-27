import { FaStar } from "react-icons/fa6";

interface PropsType {
  count: number;
}

const Ratings = ({ count }: PropsType) => {
  return (
    <div className="flex items-center gap-[2px]">
      {Array.from({ length: count }, (_, index) => index).map((data) => (
        <FaStar key={data} className="text-base text-yellow-500" />
      ))}
    </div>
  );
};

export default Ratings;

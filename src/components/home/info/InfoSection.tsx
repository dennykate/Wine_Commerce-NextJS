import { InfoCard } from "./";
import infoData from "@/data/infoData";

const InfoSection = () => {
  return (
    <section className="w-full py-10">
      <div className="w-full p-8 border rounded-md grid md:grid-cols-4 grid-cols-1 md:gap-0 gap-7">
        {infoData?.map(({ Icon, title, description }, i: number) => (
          <InfoCard
            Icon={Icon}
            title={title}
            description={description}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default InfoSection;

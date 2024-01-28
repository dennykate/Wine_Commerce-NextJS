import Image from "next/image";

const DevelopmentWarning = () => {
  return (
    <>
      <div className="w-[300px]">
        <Image
          src="https://i.postimg.cc/PJywKXFB/Create-bro.png"
          alt="notice"
          width={1024}
          height={1024}
        />
      </div>
      <h6 className="text-xl font-bold">
        This functionality is still being developed.
      </h6>
    </>
  );
};

export default DevelopmentWarning;

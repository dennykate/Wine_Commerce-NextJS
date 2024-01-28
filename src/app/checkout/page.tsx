import meta from "@/config/meta";
import Image from "next/image";

export const metadata = {
  title: `Checkout - ${meta.title}`,
  description: meta.description,
  openGraph: {
    title: meta.title,
    url: meta.url,
    content: meta.description,
    description: meta.description,
    images: meta.images,
  },
};

const Checkout = () => {
  return (
    <div className="min-h-[calc(100vh-140px)] flex justify-center items-center flex-col">
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
    </div>
  );
};

export default Checkout;

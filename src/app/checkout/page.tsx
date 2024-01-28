import { DevelopmentWarning } from "@/components";
import meta from "@/config/meta";

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
      <DevelopmentWarning />
    </div>
  );
};

export default Checkout;

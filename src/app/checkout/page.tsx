import { Header } from "@/components/checkout";
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
    <>
      <Header />
    </>
  );
};

export default Checkout;

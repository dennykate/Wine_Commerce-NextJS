import {
  Banner,
  BestSeller,
  Brands,
  FeatureProducts,
  Hero,
  InfoSection,
  PopularCategories,
  RecentlyAdded,
  PhotoSection,
  DealsAndArrivals,
} from "@/components/home";
import meta from "@/config/meta";

export const metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    url: meta.url,
    content: meta.description,
    description: meta.description,
    images: meta.images,
  },
};

const Home = () => {
  return (
    <>
      <Hero />
      <div className="sm:px-4 px-2 ">
        <InfoSection />
        <BestSeller />
        <PopularCategories />
        <PhotoSection />
        <DealsAndArrivals />
        <Banner />
        <FeatureProducts />
        <RecentlyAdded />
        <Brands />
      </div>
    </>
  );
};

export default Home;

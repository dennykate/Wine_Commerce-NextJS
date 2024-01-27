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

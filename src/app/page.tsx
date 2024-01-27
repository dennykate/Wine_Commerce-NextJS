
import {
  Banner,
  BestSeller,
  Brands,
  FeatureProducts,
  Hero,
  InfoSection,
  PopularCategories,
  RecentlyAdded,
    PhotoSection
} from "@/components/home";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="sm:px-4 px-2 ">
        <InfoSection />
        <BestSeller />

        <PopularCategories/>
        <PhotoSection/>
        <Banner />
        <FeatureProducts />
        <RecentlyAdded />
        <Brands />
      </div>
    </>
  );
};

export default Home;

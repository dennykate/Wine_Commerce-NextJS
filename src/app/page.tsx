import {
  Banner,
  BestSeller,
  Hero,
  InfoSection,
  PopularCategories,
  RecentlyAdded,
} from "@/components/home";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="sm:px-4 px-2">
        <InfoSection />
        <BestSeller />
        <PopularCategories />
        <Banner />
        <RecentlyAdded />
      </div>
    </>
  );
};

export default Home;

import { BestSeller, Hero, InfoSection, PhotoSection, PopularCategories } from "@/components/home";

const Home = () => {

  return (
    <>
      <Hero />
      <div className="sm:px-4 px-2">
        <InfoSection />
        <BestSeller />
        <PopularCategories/>
        <PhotoSection/>
      </div>
    </>
  );

};

export default Home;

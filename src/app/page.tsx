import { BestSeller, Hero, InfoSection, PopularCategories } from "@/components/home";

const Home = () => {

  return (
    <>
      <Hero />
      <div className="sm:px-4 px-2">
        <InfoSection />
        <BestSeller />
        <PopularCategories/>
      </div>
    </>
  );

};

export default Home;

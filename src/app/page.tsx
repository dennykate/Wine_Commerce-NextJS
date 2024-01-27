import { BestSeller, Hero, InfoSection } from "@/components/home";

const Home = () => {

  return (
    <>
      <Hero />
      <div className="sm:px-4 px-2">
        <InfoSection />
        <BestSeller />
      </div>
    </>
  );

};

export default Home;

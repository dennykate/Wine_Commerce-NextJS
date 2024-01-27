import { Hero, InfoSection } from "@/components/home";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="sm:px-4 px-2">
        <InfoSection />
      </div>
    </>
  );
};

export default Home;

const Hero = () => {
  return (
    <div
      className="w-full sm:min-h-[calc(100vh-140px)] min-h-[calc(100vh-60px)]
       bg-[url('/assets/images/hero_slider_1.jpg')] bg-center
      bg-cover flex items-start justify-center gap-4 flex-col sm:px-4 px-2"
    >
      <p className="text-base text-gray-500 uppercase">Not Fried Not Baked</p>
      <h3 className="text-3xl text-black font-bold">
        Freeze Dred Fruits <br /> Pineapple and Coconut
      </h3>
      <p className="text-base text-gray-500 ">
        Free Shipping On Quilified Order Over 35$
      </p>
      <button name="shop-now" className="w-[140px] h-[40px] bg-primary-500 text-white rounded-full font-semibold">
        Shop Now
      </button>
    </div>
  );
};

export default Hero;

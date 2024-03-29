import HomeData from "../components/ImageData";
import creditCard from "/images/creditcard.jpg";
import features from "../../src/assets/features.json";
import features2 from "../../src/assets/features2.json";
import skyline from "/images/skyline.jpeg";
import ShortFeatures from "../components/ShortFeatures";
import Nature from "../components/Nature";

const Home = () => {
  const second = true;

  return (
    <>
      <div className="flex flex-col h-[calc(60vh)] place-content-center items-center bg-[url('/images/skylines.jpeg')] bg-cover md:h-screen">
        <h1 className="text-4xl text-white drop-shadow-lg sm:text-6xl md:text-7xl xl:text-9xl">
          ZER0 fees and moooore banking!
        </h1>
        <p className="text-white text-2xl mt-3  md:text-4xl">
          Open your account in less then 10 minutes!
        </p>
      </div>
      <HomeData image={creditCard} info={features} />
      <HomeData image={skyline} info={features2} second={second} />
      <ShortFeatures />
      <Nature />
    </>
  );
};

export default Home;

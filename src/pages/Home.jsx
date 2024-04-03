import HomeData from "../components/ImageData";
import creditCard from "/images/creditcard.jpg";
import features from "../../src/assets/features.json";
import features2 from "../../src/assets/features2.json";
import skyline from "/images/skyline.jpeg";
import ShortFeatures from "../components/ShortFeatures";
import Nature from "../components/Nature";
import "../index.css";
import { useEffect, useState } from "react";

const Home = () => {
  const second = true;

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const animationClass = isAnimated ? "animated" : "";

  return (
    <>
      <div className="flex flex-col h-[calc(60vh)] place-content-center items-center bg-[url('/images/skyline1.jpeg')] bg-cover md:h-[calc(93vh)]">
        <h1
          className={`text-4xl text-white drop-shadow-xl sm:text-6xl md:text-8xl xl:text-9xl z-20 ${animationClass}`}
        >
          ZER0 fees and moooore banking!
        </h1>
        <p className="text-white text-2xl mt-3  md:text-4xl z-20">
          Open your account in less then 10 minutes!
        </p>
        <p className={`absolute opacity-10 text-[calc(20vh)] md:text-[calc(50vh)] `}>
          ▼
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

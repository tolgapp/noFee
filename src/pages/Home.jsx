import HomeData from "../components/HomeData";
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
      <div className="flex flex-col h-screen place-content-center items-center bg-[url('/images/skylines.jpeg')] bg-cover">
        <h1 className="text-6xl ml-20 text-white drop-shadow-lg md:text-8xl xl:text-6xl">
          ZER0 fees and moooore banking!
        </h1>
        <p className="text-white text-5xl mt-8 ml-20">
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

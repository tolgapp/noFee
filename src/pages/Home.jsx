import skylines from "../../public/images/skylines.jpeg"

const Home = () => {
  return (
    <div>
      <h1 className="absolute text-8xl text-white drop-shadow-lg top-1/2 inset-24">0 fees and more banking!</h1>
      <div className="home-picture">
        <img src={skylines} alt="skylines" />
      </div>
    </div>
  );
};

export default Home;

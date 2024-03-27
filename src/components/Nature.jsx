import React from "react";

const Nature = () => {
  return (
    <>
      <div className="flex flex-col h-[calc(60vh)] place-content-center items-center bg-[url('/images/nature.jpeg')] bg-cover">
        <h1
          className="text-6xl m-10

break-words text-white drop-shadow-lg md:text-9xl"
        >
          ZER0 FEE + millions of TREEs!
        </h1>
        <p className="text-white text-5xl mt-8 ml-10">
          For every 100th payment made with your bank card, we plant a tree!{" "}
        </p>
      </div>
    </>
  );
};

export default Nature;

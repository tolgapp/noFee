const ServiceData = ({ image, text, next }) => {
  return (
    <>
      <div
        className={`h-full flex flex-col md:flex-row  ${
          next ? "md:flex-row-reverse" : null
        }`}
      >
        <div
          className={`flex flex-col h-[calc(40vh)] place-content-center md:h-[calc(35vh)]`}
        >
          <h2
            className={`text-5xl md:pl-12 pl-12 pr-12 md:pr-12  sm:text-6xl md:text-7xl text-black md:pt-12 ${
              next ? "md:pl-20" : ""
            }`}
          >
            {text}
          </h2>
        </div>
        <img
          className="w-full object-cover md:w-1/2 "
          src={image}
          alt="24 / 7 Service"
        />
      </div>
    </>
  );
};

export default ServiceData;

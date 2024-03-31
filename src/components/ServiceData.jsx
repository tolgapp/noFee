const ServiceData = ({ image, text, next }) => {
  return (
    <>
      <div
        className={`h-full flex flex-col place-content-center	 md:flex-row  ${
          next ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className={`flex flex-col h-[calc(50vh)] md:w-1/2 md:pl-12 pl-12 pr-12 place-content-center	 self-center md:pr-12 font-semibold bg-white sm:h-max`}>
          <h2
            className={`text-5xl sm:text-6xl md:text-7xl text-black ${
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

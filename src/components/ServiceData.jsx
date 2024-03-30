const ServiceData = ({image, text, next}) => {
  return (
    <>
      <div className={`flex w-full ${next ? "flex-row-reverse" : ""}`}>
        <div className="w-1/2 place-content-center pl-12 pr-12 font-semibold bg-white">
          <h2 className="text-8xl text-black">
            {text}
          </h2>
        </div>
        <article className="w-1/2">
          <img className="" src={image} alt="24 / 7 Service" />
        </article>
      </div>
    </>
  );
};

export default ServiceData;

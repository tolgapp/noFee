const HomeData = ({ image, info, second }) => {
  return (
    <>
      <div className={`image-info h-full flex flex-col md:flex-row ${second ? "md:flex-row-reverse" : null}`}>
        <div
          className={`info w-1/2 flex flex-col place-content-center ml-44`}
        >
          {info.map((elt) => {
            return (
              <p key={elt.id} className="functions text-left text-3xl m-8 md:text-5xl md:m-4 ">
                {elt.title}
              </p>
            );
          })}
        </div>
        <img src={image} alt="debit card" className="w-full object-cover md:w-1/2" />
      </div>
    </>
  );
};

export default HomeData;

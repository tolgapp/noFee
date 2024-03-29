const HomeData = ({ image, info, second }) => {
  return (
    <>
      <div className={`image-info h-full flex flex-col md:flex-row ${second ? "md:flex-row-reverse" : null}`}>
        <div
          className={`info w-full flex flex-col h-[calc(40vh)] place-content-center md:h-[calc(50vh)]`}
        >
          {info.map((elt) => {
            return (
              <p key={elt.id} className="functions text-left m-3 text-3xl md:text-5xl md:m-6 ">
                ▸ {elt.title}
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

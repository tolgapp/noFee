const HomeData = ({ image, info, second }) => {
  return (
    <>
      <div className={`image-info h-full flex ${second ? "flex-row-reverse" : null}`}>
        <div
          className={`info w-1/2 flex flex-col place-content-center ml-44`}
        >
          {info.map((elt) => {
            return (
              <p key={elt.id} className="functions text-left text-5xl m-4 ">
                {elt.title}
              </p>
            );
          })}
        </div>
        <img src={image} alt="debit card" className="w-1/2 object-cover" />
      </div>
    </>
  );
};

export default HomeData;

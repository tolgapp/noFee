const FooterData = ({ info }) => {
  return (
    <div className="flex justify-around m-20">
      {info.map((elt) => {
        return <p className="text-3xl" key={info.id}>{elt.text}</p>;
      })}
    </div>
  );
};

export default FooterData;

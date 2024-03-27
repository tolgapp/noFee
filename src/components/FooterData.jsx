import apple from "/images/google.svg";
import google from "/images/apple.svg";

const FooterData = ({ info }) => {
  return (
    <div className="flex flex-col place-items-center items-center space-y-10 md:flex-row md:justify-around md:space-y-0">
      {info.map((elt) => {
        return <p className="text-3xl" key={info.id}>{elt.text}</p>;
      })}
      <div className="flex flex-col md:flex-row">
        <img src={apple} alt="" className=""/>
        <img src={google} alt="" />
      </div>
    </div>
  );
};

export default FooterData;

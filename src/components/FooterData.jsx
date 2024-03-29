import apple from "/images/google.svg";
import google from "/images/apple.svg";
import { v4 as uuidv4 } from 'uuid';


const FooterData = ({ info }) => {
  return (
    <div className="flex flex-col place-items-center items-center space-y-10 md:flex-row md:justify-around md:space-y-0">
      {info.map((elt) => {
        return <p key={uuidv4()} className="text-3xl">{elt.text}</p>;
      })}
      <div className="flex flex-col md:flex-row">
        <img src={apple} alt="" className="mb-2 md:mb-0 md:mr-4"/>
        <img src={google} alt="" />
      </div>
    </div>
  );
};

export default FooterData;

import service from "/images/service.png";
import mail from "/images/mail.png"
import ServiceData from "../components/ServiceData";

const Service = () => {

  const next = true;

  return (
    <>
     <ServiceData image={service} text={`Travel ✈️, Party 🪩 or Chill 🛀🏻 and if you have problem with your
            bank account we are 24/7 here!`}/>
    <ServiceData image={mail} text={`Get the app for more contact options!`} next={next}/>
    </>
  );
};

export default Service;

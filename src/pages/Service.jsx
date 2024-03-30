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
    <div className="flex h-96 place-content-center items-center border">
      <h4 className="text-7xl pl-20 pr-20 text-left">*We will anser via mail within 72 hours or you can call us on the number in the app if you have an urgent question.</h4>
    </div>
    </>
  );
};

export default Service;

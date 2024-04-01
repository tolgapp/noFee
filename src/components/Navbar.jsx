import { useState } from "react";
import { Link } from "react-router-dom";
import xDark from "/icons/xDark.png";
import burgerDark from "/icons/burgerDark.png";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const handleMobile = () => {
    setMobile(!mobile);
  };

  return (
    <nav className="flex drop-shadow-md justify-between bg-white right-0 p-8 z-40 md:z-50 sticky top-0 left-0">
      <section className="flex md:place-content-center md:m-4">
        <h1 className="text-3xl font-bold ml-2 md:text-5xl">noFee ▼</h1>
      </section>
      {mobile ? (<img src={xDark} className="sm:hidden w-20 z-50" onClick={handleMobile} />) : (<img src={burgerDark} className="sm:hidden w-12" onClick={handleMobile}/>) }
      {mobile ? <MobileNav mobile={mobile} /> : null}
      <ul className="hidden sm:flex justify-between items-center space-x-8 text-2xl md:text-3xl">
        <Link to={"/"}>Home</Link>
        <Link to={"/plans"}>Plans</Link>
        <Link to={"/service"}>Service</Link>
        <Link to={"/signup"} className="bg-stone-800 text-white p-3 rounded-xl">
          Sign Up
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

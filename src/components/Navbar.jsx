import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [mobile, setMobile] = useState(false);

  const handleMobile = () => {
    setMobile(true);
    console.log("mobile!")
  }

  return (
    <nav className="flex drop-shadow-md justify-between bg-white right-0 p-8 z-50 sticky top-0 left-0">
      <section className="flex md:place-content-center md:m-4">
        <h1 className="text-3xl font-bold ml-2 md:text-5xl">noFee ▼</h1>
      </section>
      <ul className="invisible md:visible  md:text-3xl md:place-content-center md:mr-8 md:space-x-10">
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

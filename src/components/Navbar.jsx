import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [mobile, setMobile] = useState(false);

  return (
    <nav className="flex justify-between bg-white right-0 p-10 z-50 md:sticky md:top-0 md:left-0">
      <section className="flex md:place-content-center md:m-4">
        <h1 className="text-3xl font-bold ml-2 md:text-6xl">noFee ▼</h1>
      </section>
      <ul className="invisible md:visible  md:text-4xl md:place-content-center md:mr-8 md:space-x-10">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/service"}>Service</Link>
        <Link to={"/contact"}>Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;

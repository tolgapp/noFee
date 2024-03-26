import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between m-6">
      <section className="flex place-content-center m-4">
        <h1 className="text-6xl font-bold ml-2">noFee</h1>
      </section>
      <ul className="text-4xl place-content-center mr-8 space-x-10">
        <Link to={"/"}>Home</Link>
        <Link to={"/service"}>Service</Link>
        <Link to={"/contact"}>Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;

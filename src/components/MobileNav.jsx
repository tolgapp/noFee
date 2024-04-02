import { Link } from "react-router-dom";

const MobileNav = ({ mobile }) => {
  return (
    <div className="md:hidden absolute bg-white h-screen top-0 left-0 w-full">
      <ul className="flex flex-col text-8xl space-y-8 pt-60 md:text-3xl items-center md:mr-8 md:space-x-10">
        <Link onClick={mobile} to={"/"}>
          Home
        </Link>
        <Link onClick={mobile} to={"/plans"}>
          Plans
        </Link>
        <Link onClick={mobile} to={"/service"}>
          Service
        </Link>
        <Link
          onClick={mobile}
          to={"/"}
          className="bg-stone-800 text-white p-5 rounded-xl"
        >
          Sign Up
        </Link>
      </ul>
    </div>
  );
};

export default MobileNav;

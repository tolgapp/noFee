import React from 'react'

const MobileNav = () => {
  return (
    <div>
        <ul className="invisible md:visible  md:text-3xl md:place-content-center md:mr-8 md:space-x-10">
        <Link to={"/"}>Home</Link>
        <Link to={"/plans"}>Plans</Link>
        <Link to={"/service"}>Service</Link>
        <Link to={"/signup"} className="bg-stone-800 text-white p-3 rounded-xl">
          Sign Up
        </Link>
      </ul>
    </div>
  )
}

export default MobileNav
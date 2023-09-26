import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="flex w-full text-black bg-blue-300 shadow-sm py-3 lg:py-5 px-4 lg:px-16 justify-between items-center">
        <Link to={'/'}><h1 className="font-bold text-lg lg:text-xl">AROGYAM</h1></Link>

        <div className="flex gap-4 lg:gap-10 text-sm lg:text-md font-semibold">
          <Link className="p-1 hover:underline" to={'/profile'}>Profile</Link>
          {/* <a className="p-1 hover:underline" href="/">Explore</a>
          <a className="p-1 hover:underline" href="/">Support</a>  */}
          <a className="p-1 border border-solid border-black px-3 rounded-sm" href="/">Log Out</a>
        </div>
      </nav>
    </>
  );
};

export default Header;

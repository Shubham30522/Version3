import React, { useContext } from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Image */}
        <Link to="/">
          <img
            src={logo}
            width={160}
            height={42}
            loading="lazy"
            alt="Website logo"
          />
        </Link>

        {/* Nav Links */}
        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Login/SignUp/Dashboard */}
        <div className="flex gap-x-4 items-center">
          {!isLoggedIn && (
            <Link to="/login">
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                Log in
              </button>
            </Link>
          )}

          {!isLoggedIn && (
            <Link to="/signup">
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                Sign Up
              </button>
            </Link>
          )}

          {isLoggedIn && (
            <Link to="/">
              <button
                onClick={() => setIsLoggedIn(false)}
                className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md"
              >
                Logout
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

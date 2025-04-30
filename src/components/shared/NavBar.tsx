import { NavLink } from "react-router-dom";
import logo from "/assets/shared/icon.svg";
import logo2 from "/assets/shared/logo2.png";
import triangle from "/assets/shared/Red_Triangle.svg";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMd = useMediaQuery({ query: "(min-width: 768px)" });
  const isXl = useMediaQuery({ query: "(min-width: 1280px)" });

  useEffect(() => {
    if (isXl && !isMd) {
      setIsMenuOpen(false);
    }
  }, [isXl, isMd]);

  return (
    <>
      <p className="hidden md:flex-center bg-red-500 h-8 text-white ">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <span className="font-semibold underline ml-2">ShopNow</span>
      </p>

      <header
        className={`flex justify-between items-center text-black py-2 px-6 md:px-12 bg-white drop-shadow-md
      }`}
      >
        <a href="#">
          <img
            src={`${isMd ? logo2 : logo}`}
            alt="logo"
            className="w-14 md:w-50 min-w-10"
          />
        </a>
        <ul
          className={` xl:flex xl:flex-row items-center font-semibold xl:text-lg ${
            isMenuOpen
              ? "absolute top-24 left-0 w-full bg-white flex flex-col items-center gap-6 text-lg py-6"
              : "hidden gap-12"
          }`}
        >
          <li>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/login">
              Sign In
            </NavLink>
          </li>
        </ul>
        <div className="relative flex-center gap-3">
          <i className="bx bx-search absolute right-7 text-2xl text-gray-500 cursor-pointer"></i>
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-45 md:w-70 mx-4 pl-2 py-2 pr-10 rounded-xl border-2 border-red-300 focus:outline-red-500 text-sm md:text-base"
          ></input>
        </div>

        <i
          className="xl:hidden block w-14 md:w-16 xl:w-18 cursor-pointer min-w-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={triangle} alt="triangle" />
        </i>
      </header>
    </>
  );
}

export default NavBar;

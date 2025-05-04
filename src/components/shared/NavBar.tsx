import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import logo from "/assets/shared/icon.svg";
import logo2 from "/assets/shared/logo2.png";
import triangle from "/assets/shared/Red_Triangle.svg";
import Banner from "./Banner";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });
  const isXl = useMediaQuery({ query: "(min-width: 1280px)" });
  const location = useLocation();

  useEffect(() => {
    if (isXl && !isMd) {
      setIsMenuOpen(false);
    }
  }, [isXl, isMd]);

  const toggleMenu = () => {
    if (isMd) return;
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {location.pathname === "/" && <Banner />}
      <header
        className={`flex items-center justify-between text-black py-2 px-6 md:px-12 bg-white ${
          isMenuOpen ? "shadow-none" : "shadow-md"
        } z-50`}
      >
        <NavLink to="/">
          <img
            src={`${isMd ? logo2 : logo}`}
            alt="logo"
            className="w-14 md:w-50 min-w-10"
          />
        </NavLink>
        <ul
          className={`xl:flex xl:flex-row items-center justify-center font-semibold xl:text-lg z-50 ${
            isMenuOpen
              ? `absolute top-24 ${
                  location.pathname !== "/" ? "top-25" : "md:top-32"
                } left-0 w-full bg-white flex flex-col items-center gap-6 text-lg pb-6 shadow-md`
              : "hidden gap-12"
          }`}
        >
          <li>
            <NavLink className="nav-link" to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact" onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/About" onClick={toggleMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/login" onClick={toggleMenu}>
              Login
            </NavLink>
          </li>
        </ul>
        <div
          className={`relative flex-center gap-3 ${
            location.pathname !== "/" ? "opacity-0" : ""
          }`}
        >
          <NavLink to="/" className="flex-center">
            <i className="bx bx-search absolute right-7 text-2xl text-gray-500 cursor-pointer"></i>
          </NavLink>
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

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import logo from "/assets/shared/icon.svg";
import logo2 from "/assets/shared/logo2.png";
import triangle from "/assets/shared/Red_Triangle.svg";
import Banner from "./Banner";
import {
  SignedIn,
  SignedOut,
  SignOutButton,
  UserButton,
} from "@clerk/react-router";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });
  const isXl = useMediaQuery({ query: "(min-width: 1280px)" });

  useEffect(() => {
    if (isXl && !isMd) {
      setIsMenuOpen(false);
    }
  }, [isXl, isMd]);

  const toggleMenu = () => {
    if (isMd && isXl) return;
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header>
        <Banner />
        <div
          className={`flex items-center text-black py-3 px-6 md:px-12 bg-white ${
            isMenuOpen ? "shadow-none" : "shadow-md"
          } z-50 justify-between`}
        >
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src={`${isMd ? logo2 : logo}`}
              alt="logo"
              className="w-10 md:w-50 min-w-10 justify-self-start"
            />
          </NavLink>
          <ul
            className={`flex flex-row items-center justify-center font-semibold xl:text-lg z-50 xl:w-60 xl:order-1 gap-6`}
          >
            <SignedOut>
              <li>
                <NavLink
                  className="nav-link"
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log In
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </NavLink>
              </li>
            </SignedOut>
            <SignedIn>
              <UserButton
                userProfileMode="navigation"
                userProfileUrl="/profile"
                showName
                appearance={{
                  layout: { unsafe_disableDevelopmentModeWarnings: true },
                  elements: {
                    userButtonPopoverCard: "fixed",
                    userButtonOuterIdentifier: "xl:text-lg!",
                    avatarBox: "w-10! h-10!",
                    userButtonBox: "gap-3!",
                    button: "shadow-none!",
                  },
                }}
              />
            </SignedIn>
          </ul>
          <ul
            className={`xl:flex xl:flex-row items-center justify-center font-semibold xl:text-lg z-50 ${
              isMenuOpen
                ? `absolute top-24 left-0 w-full bg-white flex flex-col items-center gap-6 text-lg pb-6 shadow-md`
                : "hidden gap-12"
            }`}
          >
            <li>
              <NavLink className="nav-link" to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/shop" onClick={toggleMenu}>
                Shop
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
            {!isXl && (
              <SignedIn>
                <li>
                  <NavLink
                    className="nav-link"
                    to="/profile"
                    onClick={toggleMenu}
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <SignOutButton>
                    <NavLink className="nav-link" to="/" onClick={toggleMenu}>
                      Logout
                    </NavLink>
                  </SignOutButton>
                </li>
              </SignedIn>
            )}
          </ul>
          <i
            className="xl:hidden block w-10 md:w-16 xl:w-18 cursor-pointer min-w-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={triangle} alt="triangle" />
          </i>
        </div>
      </header>
    </>
  );
}

export default NavBar;

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  SignedIn,
  SignedOut,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";

import logo from "/assets/shared/icon.svg";
import logo2 from "/assets/shared/logo2.webp";
import triangle from "/assets/shared/Red_Triangle.svg";
import CartIcon from "@/components/shared/CartIcon";

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
        <div
          className={`z-50 flex items-center justify-between bg-white px-6 py-3 md:px-12 text-black ${
            isMenuOpen ? "shadow-none" : "shadow-md"
          }`}
        >
          <NavLink
            to="/"
            aria-label="logo"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={isMd ? logo2 : logo}
              alt="logo"
              className="md:w-50 justify-self-start"
              width={40}
            />
          </NavLink>

          <ul className="z-50 flex flex-row items-center justify-center gap-2 font-semibold xl:order-1 xl:text-lg">
            <SignedOut>
              <li>
                <NavLink
                  aria-label="sign-in"
                  className="nav-link"
                  to="/sign-in"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log In
                </NavLink>
              </li>
              <li>
                <NavLink
                  aria-label="sign-up"
                  className="nav-link"
                  to="/sign-up"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </NavLink>
              </li>
            </SignedOut>

            <SignedIn>
              <NavLink
                aria-label="orders"
                className="nav-link hidden xl:block"
                to="/orders"
                onClick={() => setIsMenuOpen(false)}
              >
                Orders
              </NavLink>
              <NavLink
                aria-label="wishlist"
                className="nav-link hidden xl:block"
                to="/wishlist"
                onClick={() => setIsMenuOpen(false)}
              >
                Wishlist
              </NavLink>
              <UserButton
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
              <NavLink
                aria-label="cart"
                className="nav-link group"
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
              >
                <CartIcon />
              </NavLink>
            </SignedIn>
          </ul>

          <ul
            className={`z-50 items-center justify-center font-semibold xl:text-lg ${
              isMenuOpen
                ? `absolute top-24 left-0 flex w-full flex-col gap-6 bg-white pb-6 text-lg shadow-md`
                : "hidden xl:flex xl:flex-row xl:gap-8"
            }`}
          >
            <li>
              <NavLink
                aria-label="home"
                className="nav-link"
                to="/"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                aria-label="shop"
                className="nav-link"
                to="/shop"
                onClick={toggleMenu}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                aria-label="contact"
                className="nav-link"
                to="/contact"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                aria-label="about"
                className="nav-link"
                to="/about"
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>

            {!isXl && (
              <SignedIn>
                <li>
                  <NavLink
                    aria-label="orders"
                    className="nav-link"
                    to="/orders"
                    onClick={toggleMenu}
                  >
                    Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    aria-label="wishlist"
                    className="nav-link"
                    to="/wishlist"
                    onClick={toggleMenu}
                  >
                    Wishlist
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    aria-label="profile"
                    className="nav-link"
                    to="/profile"
                    onClick={toggleMenu}
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <SignOutButton>
                    <NavLink
                      aria-label="logout"
                      className="nav-link"
                      to="/"
                      onClick={toggleMenu}
                    >
                      Logout
                    </NavLink>
                  </SignOutButton>
                </li>
              </SignedIn>
            )}
          </ul>

          <i className="block cursor-pointer xl:hidden" onClick={toggleMenu}>
            <img src={triangle} alt="triangle" width={40} className="md:w-16" />
          </i>
        </div>
      </header>
    </>
  );
}

export default NavBar;

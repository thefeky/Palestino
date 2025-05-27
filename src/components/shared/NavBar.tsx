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
import logo2 from "/assets/shared/logo2.png";
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
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            <img
              loading="lazy"
              src={isMd ? logo2 : logo}
              alt="logo"
              className="min-w-10 w-10 md:w-50 justify-self-start"
            />
          </NavLink>

          <ul className="z-50 flex flex-row items-center justify-center gap-2 font-semibold xl:order-1 xl:text-lg">
            <SignedOut>
              <li>
                <NavLink
                  className="nav-link"
                  to="/sign-in"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log In
                </NavLink>
              </li>
              <li>
                <NavLink
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
                className="nav-link hidden xl:block"
                to="/orders"
                onClick={() => setIsMenuOpen(false)}
              >
                Orders
              </NavLink>
              <NavLink
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
              <NavLink className="nav-link" to="/about" onClick={toggleMenu}>
                About
              </NavLink>
            </li>

            {!isXl && (
              <SignedIn>
                <li>
                  <NavLink
                    className="nav-link"
                    to="/orders"
                    onClick={toggleMenu}
                  >
                    Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    to="/wishlist"
                    onClick={toggleMenu}
                  >
                    Wishlist
                  </NavLink>
                </li>
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
            className="block min-w-10 w-10 cursor-pointer md:w-16 xl:w-18 xl:hidden"
            onClick={toggleMenu}
          >
            <img loading="lazy" src={triangle} alt="triangle" />
          </i>
        </div>
      </header>
    </>
  );
}

export default NavBar;

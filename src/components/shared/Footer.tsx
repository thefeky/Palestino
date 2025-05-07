import { NavLink } from "react-router";

import logo from "/assets/shared/logo2.png";
import qr from "/assets/shared/qr.png";

function Footer() {
  return (
    <footer className="w-full bg-gray-300 flex mt-auto h-30 md:h-60 text-sm xl:text-lg">
      <div className="hidden md:flex md:justify-between xl:gap-50 md:mx-auto gap-12 py-6 md:px-8 xl:px-24">
        <ul className="flex flex-col gap-2 xl:gap-4 max-w-30 xl:max-w-50">
          <li className="">
            <NavLink to="/">
              <img src={logo} alt="logo" className="max-w-20 xl:max-w-30 " />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Subscribe</NavLink>
          </li>
          <li className="text-base">
            <NavLink to="/">Get 10% off your first order</NavLink>
          </li>
          <li className="relative flex-center gap-3 ml-5 xl:ml-0">
            <i className="bx bx-send absolute left-25 xl:left-40 text-2xl text-gray-500 cursor-pointer"></i>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-45 xl:w-70 mx-4 px-4 py-2 rounded-xl border-2 border-red-300 focus:outline-red-500 text-sm md:text-base bg-white"
            ></input>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 xl:gap-4 xl:max-w-50">
          <li className="font-semibold">
            <NavLink to="/">Support</NavLink>
          </li>
          <li>
            <NavLink to="/">Gaza, Palestine</NavLink>
          </li>
          <li>
            <NavLink to="/">gaza@palestine.com</NavLink>
          </li>
          <li>
            <NavLink to="/">+12345-67890</NavLink>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 xl:gap-4 xl:max-w-50">
          <li className=" font-semibold">
            <NavLink to="/">Account</NavLink>
          </li>
          <li>
            <NavLink to="/">My Account</NavLink>
          </li>
          <li>
            <NavLink to="/">Login / Register</NavLink>
          </li>
          <li>
            <NavLink to="/">Shop</NavLink>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 xl:gap-4 xl:max-w-50">
          <li className="font-semibold">
            <NavLink to="/">Quick Link</NavLink>
          </li>
          <li>
            <NavLink to="/">Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink to="/">Terms Of Use</NavLink>
          </li>
          <li>
            <NavLink to="/">FAQ</NavLink>
          </li>
        </ul>
        <ul className="flex flex-col gap-4 xl:max-w-50">
          <li className="font-semibold">
            <NavLink to="/">Download App</NavLink>
          </li>
          <li className="text-base font-semibold">
            <NavLink to="/">Save $3 with App</NavLink>
          </li>
          <ul className="flex gap-4">
            <li>
              <img
                src={qr}
                alt="qr"
                className="max-w-30 border-2 border-red-500"
              />
            </li>
            <ul>
              <li>
                <NavLink to="/">
                  <i className="bx bxl-facebook"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <i className="bx bxl-instagram"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <i className="bx bxl-twitter"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <i className="bx bxl-whatsapp"></i>
                </NavLink>
              </li>
            </ul>
          </ul>
        </ul>
      </div>
      <div className="md:hidden flex justify-between items-center mx-auto gap-8">
        <div>
          <img src={logo} alt="logo" className="max-w-30" />
          <NavLink to="/" className="font-semibold">
            Download App!
          </NavLink>
        </div>
        <img src={qr} alt="qr" className="max-w-20" />
      </div>
    </footer>
  );
}

export default Footer;

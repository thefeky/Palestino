import { Link } from "react-router-dom";

import logo from "/assets/shared/logo2.webp";
import qr from "/assets/shared/qr.webp";

function Footer() {
  return (
    <footer className="mt-auto flex h-30 w-full bg-gray-300 text-sm md:h-60 xl:text-md">
      <div className="hidden gap-12 py-6 md:mx-auto md:flex md:justify-between md:px-8 xl:gap-40">
        <ul className="flex max-w-30 flex-col gap-2 xl:max-w-50 xl:gap-4">
          <li>
            <Link to="/" aria-label="logo">
              <img
                src={logo}
                alt="logo"
                loading="lazy"
                className="max-w-20 xl:max-w-40"
              />
            </Link>
          </li>
          <li>Subscribe</li>
          <li className="text-base">Get 10% off your first order</li>
        </ul>

        <ul className="flex flex-col gap-2 xl:max-w-50 xl:gap-4">
          <li className="font-semibold">Support</li>
          <li>Gaza, Palestine</li>
          <li>gaza@palestine.com</li>
          <li>+12345-67890</li>
        </ul>

        <ul className="flex flex-col gap-2 xl:max-w-50 xl:gap-4">
          <li className="font-semibold">Account</li>
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Shop</li>
        </ul>

        <ul className="flex flex-col gap-2 xl:max-w-50 xl:gap-4">
          <li className="font-semibold">Quick Link</li>
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>FAQ</li>
        </ul>

        <ul className="flex flex-col gap-3 xl:max-w-50">
          <li className="font-semibold">Download App</li>
          <li className="text-base font-semibold">Save $3 with App</li>
          <li className="flex gap-4">
            <img
              loading="lazy"
              src={qr}
              alt="qr"
              className="max-w-30 border-2 border-red-500"
            />
            <ul className="flex flex-col gap-3">
              <li>
                <i className="bx bxl-facebook scale-150"></i>
              </li>
              <li>
                <i className="bx bxl-instagram scale-150"></i>
              </li>
              <li>
                <i className="bx bxl-twitter scale-150"></i>
              </li>
              <li>
                <i className="bx bxl-whatsapp scale-150"></i>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="mx-auto flex gap-8 items-center justify-between md:hidden">
        <div>
          <img loading="lazy" src={logo} alt="logo" className="max-w-30" />
          <Link to="/" aria-label="logo" className="font-semibold">
            Download App!
          </Link>
        </div>
        <img loading="lazy" src={qr} alt="qr" className="max-w-20" />
      </div>
    </footer>
  );
}

export default Footer;

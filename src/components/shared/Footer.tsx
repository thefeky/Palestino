import { Link } from "react-router-dom";

import logo from "/assets/shared/logo2.png";
import qr from "/assets/shared/qr.png";

function Footer() {
  return (
    <footer className="mt-auto flex h-30 w-full bg-gray-300 text-sm md:h-60 xl:text-md">
      <div className="hidden gap-12 py-6 md:mx-auto md:flex md:justify-between md:px-8 xl:gap-40">
        <ul className="flex max-w-30 flex-col gap-2 xl:max-w-50 xl:gap-4">
          <li>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                loading="lazy"
                className="max-w-20 xl:max-w-40"
              />
            </Link>
          </li>
          <li>
            <Link to="/">Subscribe</Link>
          </li>
          <li className="text-base">
            <Link to="/">Get 10% off your first order</Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-2 xl:max-w-50 xl:gap-4">
          <li className="font-semibold">
            <Link to="/">Support</Link>
          </li>
          <li>
            <Link to="/">Gaza, Palestine</Link>
          </li>
          <li>
            <Link to="/">gaza@palestine.com</Link>
          </li>
          <li>
            <Link to="/">+12345-67890</Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-2 xl:max-w-50 xl:gap-4">
          <li className="font-semibold">
            <Link to="/">Account</Link>
          </li>
          <li>
            <Link to="/">My Account</Link>
          </li>
          <li>
            <Link to="/">Login / Register</Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-2 xl:max-w-50 xl:gap-4">
          <li className="font-semibold">
            <Link to="/">Quick Link</Link>
          </li>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/">Terms Of Use</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-3 xl:max-w-50">
          <li className="font-semibold">
            <Link to="/">Download App</Link>
          </li>
          <li className="text-base font-semibold">
            <Link to="/">Save $3 with App</Link>
          </li>
          <li className="flex gap-4">
            <img
              loading="lazy"
              src={qr}
              alt="qr"
              className="max-w-30 border-2 border-red-500"
            />
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/">
                  <i className="bx bxl-facebook scale-150"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="bx bxl-instagram scale-150"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="bx bxl-twitter scale-150"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="bx bxl-whatsapp scale-150"></i>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="mx-auto flex gap-8 items-center justify-between md:hidden">
        <div>
          <img loading="lazy" src={logo} alt="logo" className="max-w-30" />
          <Link to="/" className="font-semibold">
            Download App!
          </Link>
        </div>
        <img loading="lazy" src={qr} alt="qr" className="max-w-20" />
      </div>
    </footer>
  );
}

export default Footer;

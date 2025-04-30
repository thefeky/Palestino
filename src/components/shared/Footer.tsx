import logo from "/assets/shared/logo2.png";
import qr from "/assets/shared/qr.svg";
function Footer() {
  return (
    <footer className="w-full bg-gray-300 flex h-30 md:h-60 bottom-0 text-sm xl:text-lg mt-auto">
      <div className="hidden md:flex md:justify-between xl:gap-50 md:mx-auto gap-12 py-6 md:px-8 xl:px-24">
        <ul className="flex flex-col gap-2 xl:gap-4 max-w-30 xl:max-w-50">
          <li className="">
            <a href="#">
              <img src={logo} alt="logo" className="max-w-20 xl:max-w-30 " />
            </a>
          </li>
          <li>
            <a href="#">Subscribe</a>
          </li>
          <li className="text-base">
            <a href="#">Get 10% off your first order</a>
          </li>
          <li className="relative flex-center gap-3">
            <i className="bx bx-send absolute right-2 text-2xl text-gray-500 cursor-pointer"></i>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-45 md:w-70 mx-4 px-4 py-2 rounded-xl border-2 border-red-300 focus:outline-red-500 text-sm md:text-base bg-white"
            ></input>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 xl:gap-4 xl:max-w-50">
          <li className="font-semibold">
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Gaza, Palestine</a>
          </li>
          <li>
            <a href="#">gaza@palestine.com</a>
          </li>
          <li>
            <a href="#">+12345-67890</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 xl:gap-4 xl:max-w-50">
          <li className=" font-semibold">
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <a href="#">Login / Register</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 xl:gap-4 xl:max-w-50">
          <li className="font-semibold">
            <a href="#">Quick Link</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms Of Use</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-4 xl:max-w-50">
          <li className="font-semibold">
            <a href="#">Download App</a>
          </li>
          <li className="text-base font-semibold">
            <a href="#">Save $3 with App</a>
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
                <a href="#">
                  <i className="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-whatsapp"></i>
                </a>
              </li>
            </ul>
          </ul>
        </ul>
      </div>
      <div className="md:hidden flex justify-between items-center mx-auto gap-8">
        <div>
          <img src={logo} alt="logo" className="max-w-30" />
          <a className="font-semibold">Download App!</a>
        </div>
        <img src={qr} alt="qr" className="max-w-20" />
      </div>
    </footer>
  );
}

export default Footer;

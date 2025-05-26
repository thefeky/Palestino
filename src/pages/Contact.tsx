import { NavLink } from "react-router";
import { useMediaQuery } from "react-responsive";

import Break from "@/components/shared/Break";
import { Button } from "@/components/ui/button";

function Contact() {
  const isXl = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <main className="w-[90%] xl:w-[80%] mx-auto py-8 xl:py-10">
      <p className="text-black">
        <NavLink to="/" className="text-black/50 ">
          Home
        </NavLink>{" "}
        / Contact
      </p>
      <div className="my-10 flex-center flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-[22%] flex-center xl:flex-col md:gap-12 xl:gap-6 shadow-md py-2 md:py-11 xl:py-20 text-[11px] md:text-xl">
          <div className="flex items-center md:flex-grow flex-col gap-4 md:gap-6 h-34 md:h-50 xl:h-40 w-70 md:px-5 xl:w-[95%]">
            <div className="gap-2 md:gap-4 font-[500] flex-center mr-auto ml-7 md:ml-0">
              <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#DB4444] flex-center">
                <i className="bx bx-phone text-[#ffffff] scale-150"></i>
              </div>{" "}
              <p className="text-md xl:text-xl">Call Us</p>
            </div>
            <div className="flex items-start w-[90%] md:w-full flex-col gap-2 md:gap-4">
              <p className="xl:w-[85%]">
                We are available 24 hours, 7 days a week.
              </p>
              <p>Phone: +12345-67890</p>
            </div>
          </div>
          {isXl && <Break percentage={90} gap={0} />}
          <div className="flex items-center md:flex-grow flex-col gap-4 md:gap-6 h-34 md:h-50 w-70 md:px-5 xl:w-[95%]">
            <div className="gap-2 md:gap-4 font-[500] flex-center mr-auto ml-7 md:ml-0">
              <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#DB4444] flex-center">
                <i className="bx bx-envelope text-[#ffffff] scale-150"></i>
              </div>{" "}
              <p className="text-md xl:text-xl">Mail Us</p>
            </div>
            <div className="flex w-full flex-col gap-2 md:gap-4">
              <p className="w-[98%]">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p>Email: gaza@palestine.com</p>
              <p>Email: support@gaza.com</p>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[90%] xl:max-w-[900px] shadow-md py-4 md:py-11 xl:py-20 md:h-[498px] xl:h-[570px] flex flex-col gap-4 md:gap-10">
          <div className="mx-auto flex flex-col md:flex-row justify-between items-center w-full md:w-[90%] xl:max-w-[810px] gap-4 md:gap-8">
            <input
              className="w-[90%] md:w-[30%] h-10 md:h-14 border-2 border-red-100 focus:outline-red-300 bg-gray-100 rounded-md px-3"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-[90%] md:w-[30%] h-10 md:h-14 border-2 border-red-100 focus:outline-red-300 bg-gray-100 rounded-md px-3"
              type="text"
              placeholder="Your Email"
            />
            <input
              className="w-[90%] md:w-[30%] h-10 md:h-14 border-2 border-red-100 focus:outline-red-300 bg-gray-100 rounded-md px-3"
              type="text"
              placeholder="Your Phone"
            />
          </div>
          <div className="mx-auto w-full flex-center">
            <textarea
              className="w-[90%] h-30 md:h-50 border-2 border-red-100 focus:outline-red-300 bg-gray-100 rounded-md px-3 py-3 resize-none"
              placeholder="Your Message"
            />
          </div>
          <div className="w-full flex-center md:justify-end md:pr-9 xl:pr-11">
            <Button className="bg-[#DB4444] text-white hover:bg-red-500 w-[90%] md:w-[40%] xl:w-[30%] h-14 cursor-pointer font-semibold text-base">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;

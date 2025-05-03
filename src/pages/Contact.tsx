import { NavLink } from "react-router";
import Break from "@/components/shared/Break";
import { Button } from "@/components/ui/button";

function Contact() {
  return (
    <main className="md:w-[90%] xl:w-[80%] mx-auto py-10">
      <p className="text-black text-left relative">
        <NavLink to="/" className="text-black/50 ">
          Home
        </NavLink>{" "}
        / Contact
      </p>
      <div className="my-10 flex-center gap-6">
        <div className="w-[22%] flex flex-col gap-8 shadow-md py-11">
          <div className="mx-auto flex flex-col w-[80%] gap-6">
            <div className="flex items-center gap-4 font-[500]">
              <div className="w-10 h-10 rounded-full bg-[#DB4444] flex-center">
                <i className="bx bx-phone text-[#ffffff] scale-150"></i>
              </div>{" "}
              <p className="text-xl">Call Us</p>
            </div>
            <div className="flex flex-col gap-4">
              <p>We are available 24 hours, 7 days a week.</p>
              <p>Phone: +12345-67890</p>
            </div>
          </div>
          <Break percentage={90} gap={0} />
          <div>
            <div className="mx-auto flex flex-col w-[80%] gap-6">
              <div className="flex items-center gap-4 font-[500]">
                <div className="w-10 h-10 rounded-full bg-[#DB4444] flex-center">
                  <i className="bx bx-envelope text-[#ffffff] scale-150"></i>
                </div>{" "}
                <p className="text-xl">Mail Us</p>
              </div>
              <div className="flex flex-col gap-4">
                <p>
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p>Emails: gaza@palestine.com</p>
                <p>Emails: support@gaza.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[78%] max-w-[900px] shadow-md py-11 h-[498px] flex flex-col gap-10">
          <div className="mx-auto flex justify-between w-full max-w-[810px] gap-8">
            <input
              className="w-[30%] h-14 border-2 border-red-100 focus:outline-red-300 bg-gray-100 rounded-md px-3"
              type="text"
              placeholder="Your Name"
            ></input>
            <input
              className="w-[30%] h-14 border-2 border-red-100 focus:outline-red-300 bg-gray-100 rounded-md px-3"
              type="text"
              placeholder="Your Email"
            ></input>
            <input
              className="w-[30%] h-14 border-2 border-red-100 focus:outline-red-300 bg-gray-100 rounded-md px-3"
              type="text"
              placeholder="Your Phone"
            ></input>
          </div>
          <div className="mx-auto w-full flex-center">
            <textarea
              className="w-[90%] h-50 border-2 border-red-100 focus:outline-red-300 bg-gray-100 rounded-md px-3 py-3 resize-none"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="w-full flex justify-end pr-[45px]">
            <Button className="bg-red-500 text-white hover:bg-red-600 w-[30%] h-14 cursor-pointer">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;

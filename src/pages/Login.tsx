import { NavLink } from "react-router";

import { Button } from "@/components/ui/button";

function Login() {
  return (
    <main className="w-[90%] xl:w-[80%] mx-auto py-8 xl:py-10">
      <div className="w-full flex-center flex-col xl:flex-row gap-2 md:gap-20 md:my-10">
        <img
          className="w-[90%] xl:w-1/2 mt-2 xl:mt-0 mb-4 xl:mb-0"
          src="assets/login/pic.jpg"
        />
        <div className="flex justify-start w-[90%] flex-col gap-4 md:gap-6 xl:w-155">
          <h1 className="font-semibold text-2xl md:text-5xl text-left">
            Log in to Palestino
          </h1>
          <p className="font-[400] md:text-2xl">Enter your details below</p>
          <input
            className="w-full xl:w-[90%] h-10 md:h-14 border-2 border-red-100 focus:outline-red-300 bg-gray-100 rounded-md px-3 text-base"
            type="text"
            placeholder="Email or Phone Number"
          />
          <input
            className="w-full xl:w-[90%] h-10 md:h-14 border-2 border-red-100 focus:outline-red-300 bg-gray-100 rounded-md px-3 text-base"
            type="text"
            placeholder="Password"
          />
          <div className="flex flex-col md:flex-row items-center justify-between w-full xl:w-[90%] gap-4">
            <Button className="bg-[#DB4444] text-white hover:bg-red-500 w-full md:w-[40%] h-14 cursor-pointer font-semibold text-base">
              Log In
            </Button>
            <NavLink to="/" className="text-[#DB4444] font-normal text-lg">
              Forgot Password?
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;

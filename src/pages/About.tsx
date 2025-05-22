import { NavLink } from "react-router";

import pic from "@assets/aboutus/Shopping.jpg";
import IconList from "@/components/shared/IconList";

function About() {
  return (
    <main className="w-[90%] xl:w-[80%] mx-auto py-8 xl:py-10">
      <p className="text-black">
        <NavLink to="/" className="text-black/50 ">
          Home
        </NavLink>
        / About
      </p>
      <div className="w-full flex-center flex-col xl:flex-row gap-2 md:gap-10 xl:mb-10">
        <div className="xl:w-1/2 flex-center xl:items-start flex-col gap-4 mt-4 md:my-0 md:gap-10 w-[90%] md:w-full text-sm md:text-base">
          <h1 className="font-semibold text-center text-2xl md:text-6xl md:text-left">
            Our Story
          </h1>
          <div className="flex flex-col gap-4 md:gap-6 md:w-[82%] xl:w-155 font-[500] md:text-lg">
            <p>
              Launced in 2015, Palestino is Middle East’s premier online
              shopping marketplace with an active presence in Palestine.
              Supported by wide range of tailored marketing, data and service
              solutions, Palestino has 10,500 sallers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p>
              Palestino has more than 1 thousand products to offer, growing at a
              very fast rate. Palestino offers a diverse range of products in
              categories like electronics, fashion, home and lifestyle,
              groceries, sports and outdoor, toys, medicine and more.
            </p>
          </div>
        </div>
        <img className="w-[90%] xl:w-1/2 mt-2 xl:mt-0 mb-8 xl:mb-0" src={pic} />
      </div>
      <IconList
        option="stats"
        color="black"
        size={58}
        iconSize={40}
        radius="full"
        border="border-gray-300 border-11"
        includeNames={false}
        gap="gap-6 xl:gap-30"
        includeDescription={true}
        classes="md:my-10 w-40"
        nameSize={32}
      />
      <div className="flex-center my-10 flex-col xl:flex-row gap-6 md:gap-10 xl:gap-40">
        <div className="flex-center flex-col gap-2 md:gap-4">
          <img
            className="w-70 h-70 md:w-100 md:h-100 border-2 border-red-500"
            src="assets/aboutus/Amer.jpg"
          />
          <div className="flex items-center xl:items-start flex-col xl:mr-auto gap-1">
            <h1 className="font-semibold md:text-2xl xl:text-xl">Ahmed Amer</h1>
            <p className="md:text-lg xl:text-base">Founder & Chairman</p>
          </div>
        </div>
        <div className="flex-center flex-col gap-2 md:gap-4">
          <img
            className="w-70 h-70 md:w-100 md:h-100 border-2 border-red-500"
            src="assets/aboutus/Sherif.jpg"
          />
          <div className="flex items-center xl:items-start flex-col xl:mr-auto gap-1">
            <h1 className="font-semibold md:text-2xl xl:text-xl">Sherif Ali</h1>
            <p className="md:text-lg xl:text-base">Managing Director</p>
          </div>
        </div>
        <div className="flex-center flex-col gap-2 md:gap-4">
          <img
            className="w-70 h-70 md:w-100 md:h-100 border-2 border-red-500"
            src="assets/aboutus/Hazem.jpeg"
          />
          <div className="flex items-center xl:items-start flex-col xl:mr-auto gap-1">
            <h1 className="font-semibold md:text-2xl xl:text-xl">
              Hazem Elseddiq
            </h1>
            <p className="md:text-lg xl:text-base">Product Designer</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;

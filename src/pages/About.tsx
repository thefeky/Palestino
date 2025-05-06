import { NavLink } from "react-router";
import pic from "@assets/aboutus/Shopping.jpg";
import IconList from "@/components/shared/IconList";

function About() {
  return (
    <main className="w-full py-8 xl:py-10 overflow-x-hidden">
      <p className="text-black xl:ml-48 mx-4.5">
        <NavLink to="/" className="text-black/50 ">
          Home
        </NavLink>{" "}
        / About
      </p>
      <div className="w-full xl:w-screen flex-center flex-col xl:flex-row gap-2 md:gap-10">
        <div className="xl:w-1/2 flex-center xl:items-start flex-col gap-4 my-4 md:my-0 md:gap-10 w-[90%] md:w-full text-sm md:text-base xl:ml-48 mx-4.5">
          <h1 className="font-semibold text-center text-2xl md:text-6xl md:text-left">
            Our Story
          </h1>
          <div className="flex flex-col gap-4 md:gap-6 md:w-[82%] xl:w-155 font-[500] md:text-xl">
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
        <img className="w-[90%] mx-auto xl:w-screen ml-auto" src={pic} />
      </div>
      <IconList
        option="stats"
        color="black"
        size={58}
        iconSize={40}
        radius="full"
        border="border-gray-300 border-11"
        includeNames={false}
        gap="xl:gap-30"
        includeDescription={true}
        classes="my-8 md:my-10 xl:my-20"
        nameSize={32}
      />
    </main>
  );
}

export default About;

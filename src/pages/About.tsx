import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import IconList from "@/components/shared/IconList";
import pic from "/assets/aboutus/Shopping.jpg";

const founders = [
  {
    name: "Ahmed Amer",
    role: "Founder & Chairman",
    image: "assets/aboutus/Amer.jpg",
  },
  {
    name: "Sherif Ali",
    role: "Managing Director",
    image: "assets/aboutus/Sherif.jpg",
  },
  {
    name: "Hazem Elseddiq",
    role: "Product Designer",
    image: "assets/aboutus/Hazem.jpeg",
  },
];

function About() {
  return (
    <main className="w-[90%] xl:w-[80%] mx-auto py-8 xl:py-10">
      <Helmet>
        <title>About Us | Palestino</title>
        <meta
          name="description"
          content="Learn about Palestino's story, mission, and leadership."
        />
        <link rel="canonical" href="https://palestino.com/about" />
      </Helmet>

      <p className="text-black mb-4">
        <Link to="/" className="text-black/50">
          Home
        </Link>{" "}
        / About
      </p>

      <div className="w-full flex-center flex-col xl:flex-row gap-2 md:gap-10 xl:mb-10">
        <div className="xl:w-1/2 flex flex-col gap-4 md:gap-10 text-sm md:text-base">
          <h1 className="font-semibold text-center text-2xl md:text-6xl md:text-left">
            Our Story
          </h1>
          <div className="flex flex-col gap-4 md:gap-6 md:w-[82%] xl:w-155 font-medium md:text-lg">
            <p>
              Launched in 2015, Palestino is the Middle East’s premier online
              shopping marketplace, proudly serving Palestine. With 10,500
              sellers and 300 brands, we reach over 3 million customers.
            </p>
            <p>
              Palestino offers a growing range of products from electronics,
              fashion, groceries to medicine — with over 1,000+ SKUs and
              expanding daily.
            </p>
          </div>
        </div>
        <img
          src={pic}
          alt="Our Story"
          className="w-[90%] xl:w-1/2 mt-2 xl:mt-0 mb-8 xl:mb-0 rounded-lg"
          loading="lazy"
        />
      </div>

      <IconList
        option="stats"
        color="black"
        size={58}
        iconSize={40}
        radius="full"
        border="border-gray-300 border-11"
        includeNames={false}
        includeDescription
        gap="gap-6 xl:gap-30"
        classes="md:my-10 w-40"
        nameSize={32}
      />

      <div className="flex-center my-10 flex-col xl:flex-row gap-6 md:gap-10 xl:gap-40">
        {founders.map((member) => (
          <div
            key={member.name}
            className="flex-center flex-col gap-2 md:gap-4"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-70 h-70 md:w-100 md:h-100 border-2 border-red-500 rounded-lg object-cover"
              loading="lazy"
            />
            <div className="flex items-center xl:items-start flex-col xl:mr-auto gap-1">
              <h1 className="font-semibold md:text-2xl xl:text-xl">
                {member.name}
              </h1>
              <p className="md:text-lg xl:text-base">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default About;

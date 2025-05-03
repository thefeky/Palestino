import { NavLink } from "react-router";

function About() {
  return (
    <main className="md:w-[90%] xl:w-[80%] mx-auto py-10">
      <p className="text-black text-left relative">
        <NavLink to="/" className="text-black/50 ">
          Home
        </NavLink>{" "}
        / About
      </p>
    </main>
  );
}

export default About;

import Section from "@/components/shared/Section";
import { NavLink } from "react-router";

function Shop() {
  return (
    <main className="md:w-[90%] xl:w-[80%] mx-auto py-10">
      <div className={`relative flex-center gap-3`}>
        <NavLink to="/" className="flex-center">
          <i className="bx bx-search absolute right-7 text-2xl text-gray-500 cursor-pointer"></i>
        </NavLink>
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-45 md:w-70 mx-4 pl-2 py-2 pr-10 rounded-xl border-2 border-red-300 focus:outline-red-500 text-sm md:text-base"
        ></input>
      </div>
      <Section title="Shop" text="Browse Our Products" num={12} />
    </main>
  );
}

export default Shop;

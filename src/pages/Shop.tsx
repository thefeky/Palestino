import Section from "@/components/shared/Section";

function Shop() {
  return (
    <main className="md:w-[90%] xl:w-[80%] mx-auto py-10">
      <div className="relative flex-center gap-3 pb-4">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-[80%] mx-4 pl-2 py-2 pr-10 rounded-xl border-2 border-red-300 focus:outline-red-500 text-sm md:text-base"
        ></input>
      </div>
      <Section title="Shop" text="Browse Our Products" num={12} />
    </main>
  );
}

export default Shop;

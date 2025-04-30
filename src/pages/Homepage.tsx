import AccordionComp from "@/components/homepage/AccordionComp";
import Break from "@/components/shared/Break";
import CarouselComp from "@/components/homepage/CarouselComp";
import Section from "@/components/shared/Section";
import IconList from "@/components/shared/IconList";

function Homepage() {
  return (
    <>
      <main className="md:w-[90%] xl:w-[80%] mx-auto py-10">
        <div className="gap-10 xl:gap-20 hidden md:flex md:h-90">
          <AccordionComp />
          <CarouselComp width="w-[80%]" md="" lg="" />
        </div>
        <Section title="Today's" text="Flash Sales" featured />
        <Break />
        <Section
          title="Sub Categories"
          text="Browse By Sub Category"
          productSection={false}
        />
        <IconList option="subcategories" size={40} />
        <Break />
        <Section
          title="This Month"
          text="Best Selling Products"
          featured={false}
        />
        <Break />
        <Section title="Our Products" text="Explore Our Products" num={8} />
        <Break />
        <IconList
          option="perks"
          color="black"
          size={20}
          iconSize={14}
          radius="full"
          border="border-gray-300 border-16"
          includeNames={false}
          gap="xl:gap-30"
          includeDescription={true}
          classes="my-6"
        />
      </main>
    </>
  );
}

export default Homepage;

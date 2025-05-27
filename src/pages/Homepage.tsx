import { lazy, Suspense, useMemo } from "react";
import Skeleton from "react-skeleton-loaders";

import Break from "@/components/shared/Break";
import Section from "@/components/shared/Section";
import IconList from "@/components/shared/IconList";

const AccordionComp = lazy(() => import("@/components/homepage/AccordionComp"));
const CarouselComp = lazy(() => import("@/components/homepage/CarouselComp"));

const FLASH_SALE_COUNT = 4;
const BESTSELLER_COUNT = 4;
const PRODUCT_LIST_COUNT = 8;

function Homepage() {
  const canonicalUrl = useMemo(() => "https://palestino.com", []);

  return (
    <>
      <title>Homepage | Palestino</title>
      <meta
        name="description"
        content="Browse flash sales, categories, and top-selling products on Palestino."
      />
      <link rel="canonical" href={canonicalUrl} aria-label="homepage" />

      <main className="mx-auto py-10 md:w-[90%] xl:w-[85%]">
        <Suspense
          fallback={
            <div className="hidden md:flex md:h-90 gap-10 xl:gap-10">
              <Skeleton width="20%" height="288px" />
              <Break horizontal={false} gap={0} percentage={90} />
              <Skeleton width="80%" height="280px" />
            </div>
          }
        >
          <div className="hidden md:flex md:h-90 gap-10 xl:gap-10">
            <AccordionComp />
            <Break horizontal={false} gap={0} percentage={90} />
            <CarouselComp width="w-[80%]" md="" lg="" />
          </div>
        </Suspense>

        <Section
          title="Today's"
          text="Flash Sales"
          onSale={true}
          num={FLASH_SALE_COUNT}
        />
        <Break />

        <Section
          title="Sub Categories"
          text="Browse By Sub Category"
          productSection={false}
        />
        <IconList option="subcategories" classes="xl:hover:scale-101" />
        <Break />

        <Section
          title="This Month"
          text="Best Selling Products"
          onSale={false}
          num={BESTSELLER_COUNT}
        />
        <Break />

        <Section
          title="Our Products"
          text="Explore Our Products"
          num={PRODUCT_LIST_COUNT}
        />
        <Break />

        <IconList
          option="perks"
          color="black"
          size={58}
          iconSize={40}
          radius="full"
          border="border-11 border-gray-300"
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

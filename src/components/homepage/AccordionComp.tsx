import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function AccordionComp() {
  return (
    <>
      <Accordion type="single" collapsible className="w-60 xl:w-80">
        <AccordionItem value="item-1 ">
          <AccordionTrigger className="py-2">
            Beauty & Personal Care
          </AccordionTrigger>
          <AccordionContent>
            Products that enhance personal grooming and wellness, including
            skincare, fragrances, and beauty essentials. Designed to help you
            look and feel your best every day.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="py-2">
            Fashion & Accessories
          </AccordionTrigger>
          <AccordionContent>
            Stylish apparel for men and women including shirts, dresses, and
            more. Designed to keep you comfortable and on-trend for every
            occasion.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="py-2">Accessories</AccordionTrigger>
          <AccordionContent>
            A curated collection of shoes, bags, and sunglasses to complete your
            look. Essential finishing touches that combine style and
            functionality effortlessly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="py-2">
            Electronics & Gadgets
          </AccordionTrigger>
          <AccordionContent>
            Latest tech devices including laptops, smartphones, tablets, and
            mobile accessories. Stay connected and powered with cutting-edge
            electronic products.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="py-2">Home & Furniture</AccordionTrigger>
          <AccordionContent>
            Furniture, décor, and kitchen essentials to create a comfortable and
            beautiful living space. Everything you need to make your house feel
            like home.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="py-2">Groceries & Food</AccordionTrigger>
          <AccordionContent>
            Everyday food items and groceries to stock your pantry. Fresh,
            reliable, and delivered right to your doorstep for your convenience.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="py-2">
            Sports & Outdoors
          </AccordionTrigger>
          <AccordionContent>
            Equipment and accessories for active lifestyles and outdoor fun.
            Gear up for sports, fitness, and adventures with quality products.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="py-2">
            Watches & Jewellery
          </AccordionTrigger>
          <AccordionContent>
            Elegant watches and fine jewellery pieces for men and women.
            Timeless accessories that add sophistication and sparkle to any
            outfit.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default AccordionComp;

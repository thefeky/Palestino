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
          <AccordionTrigger className="py-2">Men's Fashion</AccordionTrigger>
          <AccordionContent>Men's Fashion</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="py-2">Electronics</AccordionTrigger>
          <AccordionContent>Electronics</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="py-2">Home & Lifestyle</AccordionTrigger>
          <AccordionContent>Home & Lifestyle</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="py-2">Medicine</AccordionTrigger>
          <AccordionContent>Medicine</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="py-2">Sports & Outdoor</AccordionTrigger>
          <AccordionContent>Sports & Outdoor</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="py-2">Toys</AccordionTrigger>
          <AccordionContent>Toys</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="py-2">Groceries</AccordionTrigger>
          <AccordionContent>Groceries</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="py-2">Health & Beauty</AccordionTrigger>
          <AccordionContent>Health & Beauty</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default AccordionComp;

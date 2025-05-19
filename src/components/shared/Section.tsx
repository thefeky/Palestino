import ProductList from "@/components/shared/ProductList";

interface SectionProps {
  title: string;
  text: string;
  onSale?: boolean;
  num?: number;
  productSection?: boolean;
}

function Section({
  title,
  text,
  onSale,
  num,
  productSection = true,
}: SectionProps) {
  return (
    <div>
      <div className="flex-center flex-col md:flex-row md:items-center md:justify-start mb-2 md:my-4 gap-2 md:gap-3">
        <span className="w-20 h-1 md:w-5 md:h-10 bg-red-500 rounded-sm order-1"></span>
        <h1 className="flex-center inline text-red-500 font-bold text-xl md:order-1">
          {title}
        </h1>
      </div>
      <h1 className="flex-center md:justify-start mb-4 md:mb-8 font-bold text-2xl md:text-4xl tracking-[0.05rem]">
        {text}
      </h1>
      {productSection ? <ProductList num={num} onSale={onSale} /> : null}
    </div>
  );
}

export default Section;

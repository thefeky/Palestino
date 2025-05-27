import ProductList from "@/components/shared/ProductList";

interface SectionProps {
  title: string;
  text: string;
  onSale?: boolean;
  num?: number;
  productSection?: boolean;
  searchQuery?: string;
  disableResponsiveLimit?: boolean;
}

function Section({
  title,
  text,
  onSale,
  num,
  productSection = true,
  searchQuery,
  disableResponsiveLimit,
}: SectionProps) {
  return (
    <div>
      <div className="mb-2 flex-center flex-col gap-2 md:my-4 md:flex-row md:items-center md:justify-start md:gap-3">
        <span className="order-1 h-1 w-20 rounded-sm bg-red-500 md:h-10 md:w-5"></span>
        <h1 className="order-1 inline flex-center text-xl font-bold text-red-500">
          {title}
        </h1>
      </div>

      <h1 className="mb-4 flex-center text-2xl font-bold tracking-[0.05rem] md:mb-8 md:justify-start md:text-4xl">
        {text}
      </h1>

      {productSection && (
        <ProductList
          num={num}
          onSale={onSale}
          searchQuery={searchQuery}
          disableResponsiveLimit={disableResponsiveLimit}
        />
      )}
    </div>
  );
}

export default Section;

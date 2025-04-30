import ProductList from "../homepage/ProductList";

function Section({
  title,
  text,
  featured,
  num,
  productSection = true,
}: {
  title: string;
  text: string;
  featured?: boolean;
  num?: number;
  productSection?: boolean;
}) {
  return (
    <div>
      <div className="flex-center md:items-center md:justify-start mb-4">
        <span className="w-5 h-10 bg-red-500 rounded-sm mr-4 "></span>
        <h1 className="flex-center inline  text-red-500 font-bold text-xl">
          {title}
        </h1>
      </div>
      <h1
        className="flex-center md:justify-start mb-8 font-bold text-2xl md:text-4xl tracking-[0.1rem]
"
      >
        {text}
      </h1>
      {productSection ? <ProductList num={num} featured={featured} /> : null}
    </div>
  );
}

export default Section;

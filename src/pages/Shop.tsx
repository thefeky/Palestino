import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Section from "@/components/shared/Section";

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [inputValue, setInputValue] = useState(searchQuery);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchParams(value ? { search: value } : {});
  };

  const canonicalUrl = useMemo(() => "https://palestino.com/shop", []);

  return (
    <>
      <title>Shop | Palestino</title>
      <meta
        name="description"
        content="Browse our curated selection of quality products on Palestino."
      />
      <link rel="canonical" href={canonicalUrl} />

      <main className="mx-auto py-10 md:w-[90%] xl:w-[85%]">
        <div className="relative flex-center gap-3 pb-4">
          <input
            type="text"
            aria-label="Search products"
            placeholder="What are you looking for?"
            value={inputValue}
            onChange={handleSearchChange}
            className="w-[80%] mx-4 pl-2 pr-10 py-2 rounded-xl border-2 border-red-300 text-sm md:text-base focus:outline-red-500"
          />
        </div>

        <Section
          title="Shop"
          text="Browse Our Products"
          num={12}
          searchQuery={searchQuery}
          disableResponsiveLimit={true}
        />
      </main>
    </>
  );
}

export default Shop;

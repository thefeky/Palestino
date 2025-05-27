import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Section from "@/components/shared/Section";
import ProductList from "@/components/shared/ProductList";

const categories = [
  "Beauty & Personal Care",
  "Fashion & Clothing",
  "Accessories",
  "Electronics & Gadgets",
  "Home & Furniture",
  "Groceries & Food",
  "Sports & Outdoors",
  "Watches & Jewellery",
];

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const categoryQuery = searchParams.get("category") || "";
  const featuredQuery = searchParams.get("featured") === "true";

  const [inputValue, setInputValue] = useState(searchQuery);
  const [selectedCategory, setSelectedCategory] = useState(categoryQuery);
  const [featuredOnly, setFeaturedOnly] = useState(featuredQuery);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    updateSearchParams(value, selectedCategory, featuredOnly);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);
    updateSearchParams(inputValue, value, featuredOnly);
  };

  const handleFeaturedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setFeaturedOnly(checked);
    updateSearchParams(inputValue, selectedCategory, checked);
  };

  function updateSearchParams(
    search: string,
    category: string,
    featured: boolean
  ) {
    const params: Record<string, string> = {};
    if (search) params.search = search;
    if (category) params.category = category;
    if (featured) params.featured = "true";
    setSearchParams(params);
  }

  const canonicalUrl = useMemo(() => "https://palestino.com/shop", []);

  return (
    <>
      <title>Shop | Palestino</title>
      <meta
        name="description"
        content="Browse our curated selection of quality products on Palestino."
      />
      <link rel="canonical" href={canonicalUrl} aria-label="shop" />

      <main className="mx-auto py-10 md:w-[90%] xl:w-[85%]">
        <Section
          title="Shop"
          text="Browse Our Products"
          productSection={false}
        />

        <ul className="list-none flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 pb-6 md:pb-8 w-full mx-auto md:w-[90%] xl:w-[85%]">
          <li className="w-[80%] md:w-[70%] flex-grow">
            <input
              type="text"
              aria-label="Search products"
              placeholder="What are you looking for?"
              value={inputValue}
              onChange={handleSearchChange}
              className="w-full pl-2 pr-10 py-2 rounded-xl border border-red-500 text-sm md:text-base focus:outline-red-500"
            />
          </li>

          <li className="flex flex-col gap-2 min-w-[180px] w-[80%] md:w-[30%] relative">
            <select
              aria-label="Select category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="appearance-none rounded-xl border border-red-500 py-2 px-3 text-sm md:text-base focus:outline-red-500
                /* Firefox */
                firefox:appearance-none
                "
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute top-2.5 right-3 flex items-center">
              <svg
                className="h-6 w-6 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <label
              className="ml-1 flex items-center gap-2 cursor-pointer select-none mt-2"
              htmlFor="featured-checkbox"
            >
              <input
                id="featured-checkbox"
                type="checkbox"
                checked={featuredOnly}
                onChange={handleFeaturedChange}
                aria-checked={featuredOnly}
              />
              On Sale
            </label>
          </li>
        </ul>

        <ProductList
          num={12}
          searchQuery={searchQuery}
          disableResponsiveLimit={true}
          categoryFilter={selectedCategory}
          featuredFilter={featuredOnly}
        />
      </main>
    </>
  );
}

export default Shop;

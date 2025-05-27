import { useEffect, useState } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

import Card from "./Card";
import { Button } from "../ui/button";

interface Product {
  productID: string;
  productName: string;
  productImage: string;
  productPrice: number;
  description: string;
  category: string;
  stock: number;
  rating: number;
  seller: string;
  promotion: number;
  featured?: boolean;
}

interface ProductListProps {
  onSale?: boolean;
  num?: number;
  searchQuery?: string;
  disableResponsiveLimit?: boolean;
}

function ProductList({
  onSale,
  num = 8,
  searchQuery,
  disableResponsiveLimit = false,
}: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/assets/products.json")
      .then((res) => {
        const rawProducts: Product[] = res.data.products;
        const filteredBySale =
          onSale !== undefined
            ? rawProducts.filter((product) => product.featured === onSale)
            : rawProducts;

        const filteredBySearch = searchQuery
          ? filteredBySale.filter((product) => {
              const q = searchQuery.toLowerCase();
              return (
                product.productName.toLowerCase().includes(q) ||
                product.category.toLowerCase().includes(q)
              );
            })
          : filteredBySale;

        setProducts(filteredBySearch);
      })
      .catch((err) => console.error("Error fetching products:", err))
      .finally(() => setIsLoading(false));
  }, [onSale, searchQuery]);

  const resFix = useMediaQuery({ minWidth: 1005, maxWidth: 1430 });

  const visibleProducts = showMore
    ? products
    : products.slice(0, disableResponsiveLimit ? num : resFix ? 3 : num);

  return (
    <>
      {!isLoading && products.length === 0 ? (
        <div className="mt-8 text-center text-gray-500">
          No matching products found.
        </div>
      ) : (
        <>
          <div className="flex-center flex-wrap gap-8">
            {isLoading
              ? Array.from({ length: num }).map((_, i) => (
                  <div
                    key={i}
                    className="w-[90%] md:max-w-80 h-100 bg-gray-300 animate-pulse rounded-lg"
                  />
                ))
              : visibleProducts.map((product) => (
                  <Card key={product.productID} {...product} />
                ))}
          </div>

          {!isLoading && products.length >= 8 && (
            <div className="flex justify-center">
              <Button
                aria-label="Show more products"
                className="mx-auto mt-8 cursor-pointer bg-red-600 text-white hover:bg-red-700"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show less" : "Show more"}
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default ProductList;

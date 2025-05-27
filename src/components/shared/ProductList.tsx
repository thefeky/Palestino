import { useEffect, useState } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

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
  featuredFilter?: boolean;
  categoryFilter?: string;
  num?: number;
  searchQuery?: string;
  disableResponsiveLimit?: boolean;
}

function ProductList({
  featuredFilter,
  categoryFilter,
  num = 8,
  searchQuery,
  disableResponsiveLimit = false,
}: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const resFix = useMediaQuery({ minWidth: 1005, maxWidth: 1430 });
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/assets/products.json")
      .then((res) => {
        let rawProducts: Product[] = res.data.products;

        if (featuredFilter !== undefined) {
          rawProducts = rawProducts.filter(
            (product) => product.featured === featuredFilter
          );
        }

        if (categoryFilter && categoryFilter.trim() !== "") {
          rawProducts = rawProducts.filter(
            (product) =>
              product.category.toLowerCase() === categoryFilter.toLowerCase()
          );
        }

        if (searchQuery && searchQuery.trim() !== "") {
          const q = searchQuery.toLowerCase();
          rawProducts = rawProducts.filter(
            (product) =>
              product.productName.toLowerCase().includes(q) ||
              product.category.toLowerCase().includes(q)
          );
        }

        setProducts(rawProducts);
      })
      .catch((err) => console.error("Error fetching products:", err))
      .finally(() => setIsLoading(false));
  }, [featuredFilter, categoryFilter, searchQuery]);

  const visibleProducts = products.slice(
    0,
    disableResponsiveLimit ? num : resFix ? 3 : num
  );

  const handleShowMoreClick = () => {
    if (featuredFilter === true) {
      navigate("/shop?featured=true");
    } else {
      navigate("/shop");
    }
    window.scrollTo(0, 0);
  };

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
                onClick={handleShowMoreClick}
              >
                Show more
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default ProductList;

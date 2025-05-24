import { useEffect, useState } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

import Card from "./Card";
import { Button } from "../ui/button";

interface Product {
  productName: string;
  productImage: string;
  productPrice: number;
  productDetails: string;
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
}

function ProductList({ onSale, num }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    function fetchProducts() {
      axios
        .get("/assets/products.json")
        .then((res) => {
          const products = res.data.products;
          if (onSale !== undefined) {
            const filteredProducts = products.filter(
              (product: Product) => product.featured === onSale
            );
            setProducts(filteredProducts);
          } else {
            setProducts(products);
          }
        })
        .catch((err) => console.error("Error fetching products:", err));
    }
    fetchProducts();
  }, [onSale]);

  const duoFix = useMediaQuery({
    minWidth: 1100,
    maxWidth: 1280,
  });

  const visibleProducts = showMore
    ? products
    : products.slice(0, duoFix ? 3 : num);

  return (
    <>
      <div className="flex xl:mx-3 flex-wrap gap-5">
        {visibleProducts.map((product) => (
          <Card
            key={product.productName}
            productImage={product.productImage}
            productName={product.productName}
            productPrice={product.productPrice}
            // productDetails={product.productDetails}
            // category={product.category}
            stock={product.stock}
            rating={product.rating}
            // seller={product.seller}
            promotion={product.promotion}
            featured={product.featured}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          className="bg-red-500 text-white hover:bg-red-600 mx-auto mt-8 cursor-pointer"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show less" : "Show more"}
        </Button>
      </div>
    </>
  );
}

export default ProductList;

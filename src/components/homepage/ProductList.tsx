import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Button } from "../ui/button";

function ProductList({
  featured,
  num = 4,
}: {
  featured?: boolean;
  num?: number;
}) {
  const [products, setProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    function fetchProducts() {
      axios
        .get("/assets/products.json", {
          params: {
            featured: featured,
          },
        })
        .then((res) => setProducts(res.data.products))
        .catch((err) => console.error(err));
    }
    fetchProducts();
  }, [featured]);

  const visibleProducts = showMore ? products : products.slice(0, num);

  return (
    <>
      <div className="flex flex-wrap gap-5">
        {visibleProducts.map(
          (product: {
            productName: string;
            productImage: string;
            productPrice: number;
            productDetails: string;
            category: string;
            stock: number;
            rating: number;
            seller: string;
            promotion: number;
            featured: boolean;
          }) => (
            <Card
              key={product.productName}
              productImage={product.productImage}
              productName={product.productName}
              productPrice={product.productPrice}
              // productDetails={product.productDetails}
              // category={product.category}
              // stock={product.stock}
              rating={product.rating}
              // seller={product.seller}
              promotion={product.promotion}
              featured={product.featured}
            />
          )
        )}
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

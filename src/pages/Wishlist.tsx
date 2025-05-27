import { Link } from "react-router-dom";
import { useWishlist } from "@/contexts/WishlistContext";
import Card from "@/components/shared/Card";
import { useEffect, useState } from "react";

function Wishlist() {
  const { wishlist } = useWishlist();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <title>Wishlist | Palestino</title>
      <meta name="description" content="Your saved products on Palestino." />
      <link rel="canonical" href="https://palestino.com/wishlist" />

      <main className="mx-auto py-10 md:w-[90%] xl:w-[85%]">
        <h1 className="mb-6 text-center text-3xl font-bold">Your Wishlist</h1>

        {wishlist.length === 0 && !isLoading ? (
          <p className="mt-10 text-center text-gray-500">
            Your wishlist is empty.{" "}
            <span className="text-red-500 underline">
              <Link to="/shop">Browse products to add items.</Link>
            </span>
          </p>
        ) : (
          <div className="flex-center flex-wrap gap-5">
            {isLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-[90%] md:max-w-80 h-100 bg-gray-200 animate-pulse rounded-lg"
                  />
                ))
              : wishlist.map((product) => (
                  <Card key={product.productID} {...product} />
                ))}
          </div>
        )}
      </main>
    </>
  );
}

export default Wishlist;

import toast from "react-hot-toast";

import { useCart } from "@/context/CartContext";
import { useProductModal } from "@/context/ProductModalContext";
import { useWishlist } from "@/context/WishlistContext";

import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useMediaQuery } from "react-responsive";

interface CardProps {
  productID: string;
  productName: string;
  productImage: string;
  description: string;
  promotion: number;
  featured?: boolean;
  productPrice: number;
  rating: number;
  stock: number;
  category: string;
  seller: string;
}

function Card({
  productID,
  productName,
  productImage,
  description,
  promotion,
  featured,
  productPrice,
  rating,
  stock,
  category,
  seller,
}: CardProps) {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();
  const { openModal } = useProductModal();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { user } = useUser();
  const navigate = useNavigate();

  const priceAfterPromotion = +(
    productPrice -
    (productPrice * promotion) / 100
  ).toFixed(2);

  const cartItem = cart.find((item) => item.productID === productID);

  const handleOpen = () =>
    openModal({
      id: productID,
      name: productName,
      image: productImage,
      description,
      promotion,
      price: productPrice,
      rating,
      stock,
      category,
      seller,
      featured,
    });

  const handleAddToCart = () => {
    const success = addToCart({
      id: productID,
      name: productName,
      price: featured ? priceAfterPromotion : productPrice,
      image: productImage,
      stock: stock,
    });

    if (!success) {
      return toast.error("Please sign in to add to cart!", {
        icon: "⚠️",
      });
    }

    toast.success("Added to cart");
  };

  const handleIncreaseQuantity = () => {
    if (cartItem && cartItem.quantity >= stock) return;
    updateQuantity(productID, (cartItem?.quantity || 0) + 1);
  };

  const resFix = useMediaQuery({
    minWidth: 431,
    maxWidth: 767,
  });

  const mdResFix = useMediaQuery({
    minWidth: 768,
    maxWidth: 1004,
  });

  const xlResFix = useMediaQuery({
    minWidth: 1280,
    maxWidth: 1430,
  });

  return (
    <div
      className={`relative h-100 ${resFix ? "w-[40%] min-w-70" : "w-[90%]"} ${
        mdResFix ? "md:w-80" : "md:w-[30%] md:min-w-70 md:max-w-80"
      } ${
        xlResFix ? "xl:w-80" : "xl:w-[20%] xl:min-w-70 xl:max-w-80"
      } overflow-hidden rounded-lg border border-red-500 bg-white duration-500 ease-in-out hover:shadow-md hover:shadow-gray-700 xl:hover:scale-105`}
    >
      <motion.button
        aria-label="Add to wishlist"
        whileTap={{ scale: 0.8, rotate: 15 }}
        whileHover={{ scale: 1.2 }}
        onClick={() => {
          if (!user) {
            navigate("/sign-in");
            return;
          }

          const isSaved = isInWishlist(productID);

          if (isSaved) {
            removeFromWishlist(productID);
            toast("Removed from wishlist", {
              icon: "ℹ️",
            });
          } else {
            addToWishlist({
              productID,
              productName,
              productImage,
              description,
              promotion,
              featured,
              productPrice,
              rating,
              stock,
              category,
              seller,
            });
            toast.success("Added to wishlist");
          }
        }}
        className="absolute right-3 top-3 z-10 text-red-500 transition"
      >
        {isInWishlist(productID) ? (
          <Heart size={20} fill="#ef4444" />
        ) : (
          <Heart size={20} />
        )}
      </motion.button>

      <div
        className="relative mx-3 mt-3 flex-center h-50 w-auto cursor-pointer overflow-hidden rounded-xl"
        onClick={handleOpen}
      >
        <img className="h-40 w-auto" src={productImage} alt={productName} />
        {featured && (
          <span className="absolute left-0 top-0 m-2 rounded-full bg-black px-2 text-sm font-medium text-white">
            {promotion}% OFF
          </span>
        )}
      </div>

      <div className="mt-4 px-5 pb-5">
        <p className="text-xl tracking-tight text-slate-900">{productName}</p>

        <div className="mb-5 mt-2 flex items-center justify-between">
          <p>
            <span className="mr-1 text-2xl font-bold text-slate-900 xl:mr-3">
              ${priceAfterPromotion}
            </span>
            {featured && (
              <span className="text-sm text-slate-900 line-through">
                ${productPrice}
              </span>
            )}
          </p>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id={`half-star-${star}`}
                    x1="0"
                    x2="100%"
                    y1="0"
                    y2="0"
                  >
                    <stop offset="50%" stopColor="#ffd700" />
                    <stop offset="50%" stopColor="#e5e7eb" />
                  </linearGradient>
                </defs>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  fill={
                    rating >= star
                      ? "#ffd700"
                      : rating >= star - 0.5
                      ? `url(#half-star-${star})`
                      : "#e5e7eb"
                  }
                />
              </svg>
            ))}
          </div>
        </div>

        {cartItem ? (
          <div className="mx-auto flex-center gap-6 rounded-full p-1 outline-1 outline-red-500">
            {cartItem.quantity <= 1 ? (
              <Button
                aria-label="Remove item from cart"
                onClick={() => {
                  removeFromCart(productID);
                  toast.success("Item removed");
                }}
                className="flex-center h-8 w-8 rounded bg-gray-300 hover:bg-red-500 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500 group-hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3m5 0H6"
                  />
                </svg>
              </Button>
            ) : (
              <Button
                aria-label="Decrease quantity"
                onClick={() => updateQuantity(productID, cartItem.quantity - 1)}
                className="flex-center h-8 w-8 rounded bg-gray-300 hover:bg-red-500 hover:text-white"
              >
                −
              </Button>
            )}
            <span className="w-4 text-center text-lg font-semibold">
              {cartItem.quantity}
            </span>
            <Button
              aria-label="Increase quantity"
              onClick={handleIncreaseQuantity}
              disabled={cartItem.quantity >= stock}
              className="flex-center h-8 w-8 rounded bg-gray-300 hover:bg-red-500 hover:text-white disabled:hover:bg-gray-300 disabled:hover:text-inherit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </Button>
          </div>
        ) : (
          <Button
            aria-label="Add to cart"
            onClick={handleAddToCart}
            className="w-full rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
}

export default Card;

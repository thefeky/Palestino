import { Button, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Swal from "sweetalert2";

import type { ProductDetails } from "@/contexts/ProductModalContext";
import { useCart } from "@/contexts/CartContext";

interface ProductModalProps {
  product: ProductDetails | null;
  onClose: () => void;
}

function ProductModal({ product, onClose }: ProductModalProps) {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();

  if (!product) return null;

  const {
    id,
    name,
    image,
    price,
    promotion,
    rating,
    stock,
    category,
    seller,
    description,
    featured,
  } = product;

  const priceAfterPromotion = +(price - (price * promotion) / 100).toFixed(2);

  const cartItem = cart.find((item) => item.productID === id);

  const handleAddToCart = () => {
    const success = addToCart({
      id,
      name,
      price: featured ? priceAfterPromotion : price,
      image,
      stock,
    });

    if (!success) {
      return (
        onClose(),
        Swal.fire({
          toast: true,
          icon: "warning",
          title: "Please sign in to add to cart!",
          position: "top-end",
          showConfirmButton: false,
          timer: 1200,
        })
      );
    }

    Swal.fire({
      toast: true,
      icon: "success",
      title: "Added to cart",
      position: "top-end",
      showConfirmButton: false,
      timer: 1200,
    });
  };

  const handleIncreaseQuantity = () => {
    if (cartItem && cartItem.quantity >= stock) {
      return;
    }
    updateQuantity(id, (cartItem?.quantity || 0) + 1);
  };

  return (
    <Dialog open={!!product} onClose={onClose} as={Fragment}>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
      >
        <AnimatePresence>
          {product && (
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg shadow-xl max-w-5xl h-110 xl:h-120 w-full overflow-hidden"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-semibold">{name}</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-red-500"
                >
                  &#10005;
                </button>
              </div>
              <div className="flex flex-col md:flex-row p-4 gap-6">
                <img
                  loading="lazy"
                  src={image}
                  alt={name}
                  className="hidden md:block w-auto md:h-70 xl:h-90 object-cover rounded"
                />
                <div className="flex flex-col gap-3 xl:gap-4 w-full">
                  <p className="text-lg font-medium h-20">{description}</p>
                  <p className="text-xl font-bold text-slate-900">
                    ${priceAfterPromotion}
                    {promotion > 0 && (
                      <span className="text-sm text-gray-500 line-through ml-3">
                        ${price}
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
                  <p>
                    Category:{" "}
                    <span className="font-medium capitalize">{category}</span>
                  </p>
                  <p>
                    Stock: <span className="font-medium">{stock}</span>
                  </p>
                  <p>
                    Seller: <span className="font-medium">{seller}</span>
                  </p>
                  {cartItem ? (
                    <div className="flex-center gap-6 outline-1 rounded-full outline-red-500 p-1 mx-auto w-50">
                      {cartItem.quantity <= 1 ? (
                        <button
                          onClick={() => {
                            removeFromCart(id);
                            Swal.fire({
                              toast: true,
                              icon: "success",
                              title: "Item removed",
                              position: "top-end",
                              showConfirmButton: false,
                              timer: 1200,
                            });
                          }}
                          className="w-8 h-8 bg-gray-200 rounded flex-center hover:bg-red-500 group"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-red-500 group-hover:text-white"
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
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            updateQuantity(id, cartItem.quantity - 1)
                          }
                          className="w-8 h-8 bg-gray-200 rounded flex-center hover:bg-red-500 hover:text-white"
                        >
                          −
                        </button>
                      )}
                      <span className="font-semibold text-lg w-4 text-center">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={handleIncreaseQuantity}
                        disabled={cartItem.quantity >= stock}
                        className="w-8 h-8 bg-gray-200 rounded flex-center hover:bg-red-500 hover:text-white disabled:hover:bg-gray-200 disabled:hover:text-inherit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
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
                      </button>
                    </div>
                  ) : (
                    <Button
                      onClick={handleAddToCart}
                      className="mt-4 flex items-center w-[80%] mx-auto justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4"
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Dialog>
  );
}
export default ProductModal;

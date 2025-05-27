import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.productPrice * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="w-[90%] xl:w-[80%] mx-auto py-10">
        <title>Cart | Palestino</title>
        <meta
          name="description"
          content="Your shopping cart is currently empty. Browse our products and add items to your cart."
        />
        <link rel="canonical" href="https://palestino.com/cart" />

        <div className="text-center mt-10 text-lg font-semibold">
          Your cart is empty.{" "}
          <Link to="/shop" className="text-red-500 underline" aria-label="shop">
            Shop now!
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-[90%] max-w-6xl mx-auto py-10">
      <title>Cart | Palestino</title>
      <meta
        name="description"
        content="Review your selected items and proceed to checkout on Palestino."
      />
      <link
        rel="canonical"
        href="https://palestino.com/cart"
        aria-label="cart"
      />

      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      <ul className="space-y-4">
        {cart.map((item) => (
          <li
            key={item.productID}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center flex-col md:flex-row">
              <img
                loading="lazy"
                src={item.productImage}
                alt={item.productName}
                className="w-20 h-20 object-cover mr-4 rounded"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.productName}</h2>
                <p className="text-gray-700">
                  ${item.productPrice.toFixed(2)} x {item.quantity}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  aria-label="Decrease quantity"
                  onClick={() =>
                    updateQuantity(item.productID, item.quantity - 1)
                  }
                  disabled={item.quantity === 1}
                  className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center hover:bg-red-500 hover:text-white disabled:hover:bg-gray-300 disabled:hover:text-inherit"
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
                      d="M20 12H4"
                    />
                  </svg>
                </Button>

                <span className="font-semibold text-lg w-4 text-center">
                  {item.quantity}
                </span>

                <Button
                  aria-label="Increase quantity"
                  onClick={() =>
                    updateQuantity(item.productID, item.quantity + 1)
                  }
                  disabled={
                    typeof item.stock === "number" &&
                    item.quantity >= item.stock
                  }
                  className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center hover:bg-red-500 hover:text-white disabled:hover:bg-gray-300 disabled:hover:text-inherit"
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
                </Button>
              </div>

              <Button
                aria-label="Remove item"
                onClick={() => removeFromCart(item.productID)}
                className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center hover:bg-red-500 group"
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
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <p className="text-xl font-semibold text-center mt-4">
        Total: ${total.toFixed(2)}
      </p>

      <div className="flex-center flex-col md:flex-row mt-6 md:justify-end gap-4 md:gap-8 items-center">
        <Button
          aria-label="Clear cart"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer w-70 md:w-50 h-10 order-1 md:order-0"
          onClick={() => {
            Swal.fire({
              title: "Are you sure?",
              text: "This will remove all items from your cart.",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#ef4444",
              cancelButtonColor: "#6b7280",
              confirmButtonText: "Yes, clear it!",
            }).then((result) => {
              if (result.isConfirmed) clearCart();
            });
          }}
        >
          Clear Cart
        </Button>

        <Link to="/checkout" aria-label="Proceed to checkout">
          <Button
            aria-label="Proceed to checkout"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer w-70 md:w-50 h-10"
          >
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </main>
  );
}

export default Cart;

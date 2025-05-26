import { Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/react-router";

import RootLayout from "@/layout/RootLayout";
import Homepage from "@/pages/Homepage";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Shop from "@/pages/Shop";
import Profile from "@/pages/Profile";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";

import { useProductModal } from "@/contexts/ProductModalContext";
import ProductModal from "@/components/shared/ProductModal";
import Orders from "@/pages/Orders";

const AppRoutes = () => {
  const { product, isOpen, closeModal } = useProductModal();

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/sign-in/*"
            element={
              <SignedOut>
                <Login />
              </SignedOut>
            }
          />
          <Route
            path="/sign-up/*"
            element={
              <SignedOut>
                <Register />
              </SignedOut>
            }
          />
          <Route
            path="/profile"
            element={
              <SignedIn>
                <Profile />
              </SignedIn>
            }
          />
          <Route
            path="/cart"
            element={
              <SignedIn>
                <Cart />
              </SignedIn>
            }
          />
          <Route
            path="/checkout"
            element={
              <SignedIn>
                <Checkout />
              </SignedIn>
            }
          />
          <Route
            path="/orders"
            element={
              <SignedIn>
                <Orders />
              </SignedIn>
            }
          />
        </Route>
      </Routes>
      {isOpen && product && (
        <ProductModal product={product} onClose={closeModal} />
      )}
    </>
  );
};

export default AppRoutes;

import { Routes, Route } from "react-router-dom";

import Homepage from "@/pages/Homepage";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import RootLayout from "@/layout/RootLayout";
import Shop from "@/pages/Shop";
import Profile from "@/pages/Profile";
import { SignedIn } from "@clerk/clerk-react";
import Cart from "@/pages/Cart";
import { useProductModal } from "@/contexts/ProductModalContext";
import ProductModal from "@/components/shared/ProductModal";

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
          <Route path="/sign-in/*" element={<Login />} />
          <Route path="/sign-up/*" element={<Register />} />
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
        </Route>
      </Routes>
      {isOpen && product && (
        <ProductModal product={product} onClose={closeModal} />
      )}
    </>
  );
};

export default AppRoutes;

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import ProtectedRoute from "@/components/shared/ProtectedRoute";
import PublicOnlyRoute from "@/components/shared/PublicOnlyRoute";

import RootLayout from "@/layout/RootLayout";
import NotFound from "@/pages/NotFound";
import Homepage from "@/pages/Homepage";
import Shop from "@/pages/Shop";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Cart from "@/pages/Cart";
import Wishlist from "@/pages/Wishlist";

import { useProductModal } from "@/contexts/ProductModalContext";
import ProductModal from "@/components/shared/ProductModal";
import Spinner from "@/components/shared/Spinner";

const AppRoutes = () => {
  const { product, isOpen, closeModal } = useProductModal();

  const Login = lazy(() => import("@/pages/Login"));
  const Register = lazy(() => import("@/pages/Register"));
  const Profile = lazy(() => import("@/pages/Profile"));
  const Checkout = lazy(() => import("@/pages/Checkout"));
  const Orders = lazy(() => import("@/pages/Orders"));

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/sign-in/*"
            element={
              <PublicOnlyRoute>
                <Suspense fallback={<Spinner />}>
                  <Login />
                </Suspense>
              </PublicOnlyRoute>
            }
          />
          <Route
            path="/sign-up/*"
            element={
              <PublicOnlyRoute>
                <Suspense fallback={<Spinner />}>
                  <Register />
                </Suspense>
              </PublicOnlyRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Suspense fallback={<Spinner />}>
                  <Profile />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Suspense fallback={<Spinner />}>
                  <Checkout />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Suspense fallback={<Spinner />}>
                  <Orders />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
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

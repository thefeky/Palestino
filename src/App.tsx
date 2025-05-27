import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { ClerkProvider } from "@clerk/react-router";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

import { CartProvider } from "./contexts/CartContext";
import { ProductModalProvider } from "./contexts/ProductModalContext";
import { WishlistProvider } from "./contexts/WishlistContext";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) throw new Error("Missing Clerk Publishable Key");

function App() {
  return (
    <Router>
      <HelmetProvider>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
          <WishlistProvider>
            <CartProvider>
              <ProductModalProvider>
                <AppRoutes />
              </ProductModalProvider>
            </CartProvider>
          </WishlistProvider>
        </ClerkProvider>
      </HelmetProvider>
    </Router>
  );
}

export default App;

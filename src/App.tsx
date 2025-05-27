import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { ClerkProvider } from "@clerk/react-router";
import "./App.css";

import { CartProvider } from "./context/CartContext";
import { ProductModalProvider } from "./context/ProductModalContext";
import { WishlistProvider } from "./context/WishlistContext";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) throw new Error("Missing Clerk Publishable Key");

function App() {
  return (
    <Router>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <WishlistProvider>
          <CartProvider>
            <ProductModalProvider>
              <AppRoutes />
            </ProductModalProvider>
          </CartProvider>
        </WishlistProvider>
      </ClerkProvider>
    </Router>
  );
}

export default App;

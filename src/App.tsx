import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import { CartProvider } from "./contexts/CartContext";
import { ProductModalProvider } from "./contexts/ProductModalContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <ProductModalProvider>
          <AppRoutes />
        </ProductModalProvider>
      </CartProvider>
    </Router>
  );
}

export default App;

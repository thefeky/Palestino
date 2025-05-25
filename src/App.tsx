import "./App.css";
import { CartProvider } from "./contexts/CartContext";
import { ProductModalProvider } from "./contexts/ProductModalContext";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

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

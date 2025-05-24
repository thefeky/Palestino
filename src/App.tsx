import "./App.css";
import { CartProvider } from "./contexts/CartContext";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </Router>
  );
}

export default App;

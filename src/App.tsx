import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { ClerkProvider } from "@clerk/react-router";
import { BrowserRouter as Router } from "react-router-dom";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

function App() {
  return (
    <Router>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <AppRoutes />
      </ClerkProvider>
    </Router>
  );
}

export default App;

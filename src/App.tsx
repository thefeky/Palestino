import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

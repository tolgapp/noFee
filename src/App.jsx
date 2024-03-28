import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./index.css";
import Products from "./pages/Products";
import Service from "./pages/Service";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/service"} element={<Service />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

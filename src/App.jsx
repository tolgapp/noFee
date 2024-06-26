import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import "./index.css";
import Plans from "./pages/Plans";
import Service from "./pages/Service";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/plans"} element={<Plans />} />
        <Route path={"/service"} element={<Service />} />
        <Route path={"/signup"} element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

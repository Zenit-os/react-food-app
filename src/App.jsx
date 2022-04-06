import { Route, Routes } from "react-router-dom";
import "./App.min.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

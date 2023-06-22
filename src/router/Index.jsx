import { BrowserRouter, Routes, Route } from "react-router-dom";
import Erroe from "./Erroer";
import Home from "../pages/home/Home";
import Footer from "./../components/footer/Footer";
import ProductDetail from "../pages/productDetail/ProductDetail";
import Topbar from "./../components/topbar/Topbar";
import CartPage from "./../pages/cartPage/CartPage";

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-details/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Erroe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Index;

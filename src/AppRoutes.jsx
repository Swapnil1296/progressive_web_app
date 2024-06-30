import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./utils/Loader";

// Lazy load the page components
const Home = lazy(() => import("./pages/Home"));
const ProductList = lazy(() => import("./pages/ProductList"));
const SingleProductPage = lazy(() => import("./pages/SingleProductPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const WhishList = lazy(() => import("./pages/WhishList"));
const Payment = lazy(() => import("./pages/Payment"));
const PageNotFound = lazy(() => import("./utils/PageNotFound"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WhishList />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;

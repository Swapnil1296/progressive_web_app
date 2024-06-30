import reactLogo from "./assets/react.svg";
import React from "react";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className="w-screen h-screen">
      <AppRoutes />
    </div>
  );
}

export default App;

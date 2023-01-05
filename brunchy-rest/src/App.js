import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Delivery from "./components/Delivery";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/call-us" element={<Contacts />} />
          <Route path="/free-delivery" element={<Delivery />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

import React from "react";
import { useState } from "react";
import Footer from "../Footer";
import Carousel from "../UI/Carousel/Carousel";


const Homepage = () => {

  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    setCart([...cart, item]);
  }

  return (
    <>
    <div className="home">
      <div className="home-container">
        <h1 className="home-title">The fastest brunch delivery in <span>Your city</span></h1>
        <p className="home-caption">This is my Exploration for Fruit - Food Delivery Landing Page 🍕. How about you ?</p>
        <Carousel handleClick={handleClick} />
      </div>
      <div className="box"></div>
    </div>
    <Footer cart={cart} setCart={setCart} />
    </>
  );
}

export default Homepage;
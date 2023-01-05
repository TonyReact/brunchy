import React from "react";
import { Link } from "react-router-dom";
import delivery from "../assets/img/delivery.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header__logo">
            <Link to="/">
              <span>BRUNCHY</span>
            </Link>
          </div>
        </div>
        <ul className="header-nav">
          <li>
            <Link to="/about">
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="/call-us">
              <span>Call Us</span>
            </Link>
          </li>
          <li>
            <Link to="/free-delivery">
              <img src={delivery} alt="" />
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;

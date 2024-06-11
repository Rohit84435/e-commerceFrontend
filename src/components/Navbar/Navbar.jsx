import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "/Users/rohit/Desktop/e-commerce/src/components/Assets/logo.svg";
import search_glass from "/Users/rohit/Desktop/e-commerce/src/components/Assets/search_glass.svg";
// import heart from "/Users/rohit/Desktop/e-commerce/src/components/Assets/heart.svg";
import card from "/Users/rohit/Desktop/e-commerce/src/components/Assets/card.svg";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [active, setActive] = useState(false);
  const change = () => {
    if (window.scrollY >= 80) {
      setActive(true);
    } else setActive(false);
  };

  window.addEventListener("scroll", change);
  return (
    <div className={active ? "navbar active" : "navbar "}>
      <div className="left">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" width={160} height={30} />
        </Link>
      </div>
      <div className="center">
        <input
          type="text"
          placeholder="Search on Zood"
          className="searchField"
        />
        <img src={search_glass} alt="" />
      </div>
      <div className="right">
        <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
          <span className="cart">
            <img src={card} alt="icon" />
            <div className="nav-cart-count">{getTotalCartItems()}</div>
            <p>Cart</p>
          </span>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

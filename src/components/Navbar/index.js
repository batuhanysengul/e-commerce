import React from "react";
import "./style.css";
import { FaShoppingBag } from "react-icons/fa";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="nav-logo">fresh⁰⁰</div>
        <FaShoppingBag className="bag" />
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.scss";

function NavMenu() {
  return (
    <div className="navMenu">
      <Link to="/home">
        <p className="navMenu__link active">Home</p>
      </Link>
      <Link to="/products" className="navMenu__link">
        Products
      </Link>
      <Link to="/offers" className="navMenu__link new">
      Offers
      </Link>
      <Link to="/myShop" className="navMenu__link">
        My shop
      </Link>
      <p className="navMenu__link">About us</p>
    </div>
  );
}

export default NavMenu;

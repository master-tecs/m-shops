import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.scss";

function NavMenu() {
  return (
    <div className="navMenu">
      <Link to="/home">
        <p className="navMenu__link active">Home</p>
      </Link>
      <p className="navMenu__link">Products</p>
      <p className="navMenu__link new">Offers</p>
      <p className="navMenu__link">My shop</p>
      <p className="navMenu__link">About us</p>
    </div>
  );
}

export default NavMenu;

import React from "react";
import "./NavMenu.scss";

function NavMenu() {
  return (
    <div className="navMenu">
      <p className="navMenu__link active">Home</p>
      <p className="navMenu__link">Products</p>
      <p className="navMenu__link new">Offers</p>
      <p className="navMenu__link">My shop</p>
      <p className="navMenu__link">About us</p>
    </div>
  );
}

export default NavMenu;

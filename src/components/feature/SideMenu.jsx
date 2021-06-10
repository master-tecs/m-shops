import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import "./SideMenu.scss";
import Button from "../shared/buttons/Button";
import { Link } from "react-router-dom";

function SideMenu({ sidebar, setSidebar }) {
  return (
    <div className={sidebar ? "sideBar sideBar__active" : "sideBar"}>
      <div className="sideBar__close">
        <ClearIcon
          className="sideBar__closeIcon"
          onClick={() => setSidebar(!sidebar)}
        />
      </div>
      <div className="sideBar__navMenu">
        <Link to="/home">
          <p className="navMenu__link active">Home</p>
        </Link>
        <p className="sideBar__link">Products</p>
        <p className="sideBar__link new">Offers</p>
        <p className="sideBar__link">My shop</p>
        <p className="sideBar__link">About us</p>
        <div className="sideBar__btn">
          <Button text="LOG IN" />
        </div>
      </div>
    </div>
  );
}

export default SideMenu;

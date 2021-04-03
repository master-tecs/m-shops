import React from "react";
import Search from "../../shared/search/Search";
import Button from "../../shared/buttons/Button";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import img1 from "../../../assets/img/headset/1.png";
import SpecialCard from "../../shared/specialCard/SpecialCard";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__left">
        <div className="banner__text">
          <p className="banner__smallTitle">SHOPPING IS EASY</p>
          <h1 className="banner__shopName">All Shops</h1>
          <h1 className="banner__bigTitle">Comes relaxation</h1>
          <p className="banner__discription">
            The largest online store in the area. Benefit from all the discounts
            and prizzes by buying from All Shops.
          </p>
        </div>
        <div className="banner__cta">
          <Search />
          <Button
            Icon={ShoppingCartRoundedIcon}
            showOnlyOnSmallDivce={true}
            text="Start Shopping"
          />
        </div>
      </div>
      <div className="banner__right">
        <SpecialCard title="SpecialCard" image={img1} type="banner" />
      </div>
    </div>
  );
}

export default Banner;

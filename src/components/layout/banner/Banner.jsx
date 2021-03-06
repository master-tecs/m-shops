import React from "react";
import Search from "../../shared/search/Search";
import Button from "../../shared/buttons/Button";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import SpecialCard from "../../shared/specialCard/SpecialCard";
import "./Banner.scss";
import { useHistory } from "react-router";

function Banner({ data }) {
  let history = useHistory();
  const handleClick = () => {
    history.push("/home");
  };

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
            handleClick={handleClick}
            Icon={ShoppingCartRoundedIcon}
            showOnlyOnSmallDivce={true}
            text="Start Shopping"
            dontShowTextOnSmallDivce
          />
        </div>
      </div>
      <div className="banner__right">
        <SpecialCard
          title={data.title}
          image={data.image}
          price={data.price}
          data={data}
          id={data.id}
          type="banner"
        />
      </div>
    </div>
  );
}

export default Banner;

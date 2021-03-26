import React from "react";
import RoundIcon from "../icons/RoundIcon";
import Button from "../buttons/Button";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import img1 from "../../../assets/img/shoes/shoe3.jpg";
import "./SpecialCard.scss";

function SpecialCard({ title, rate, price, image }) {
  return (
    <div className="specialCard">
      <div className="specialCard__top">
        <div className="specialCard__icon">
          <RoundIcon Icon={FavoriteRoundedIcon} />
        </div>
        <img src={img1} className="specialCard__img" alt="" />
      </div>
      <div className="specialCard__text">
        <p className="specialCard__title">{title}</p>
      </div>
      <div className="specialCard__rating">
        <div className="specialCard__star">{rate}</div>
        <p className="specialCard__price">{price}</p>
      </div>
      <Button Icon={ShoppingCartIcon} text="Add Card" />
    </div>
  );
}

export default SpecialCard;

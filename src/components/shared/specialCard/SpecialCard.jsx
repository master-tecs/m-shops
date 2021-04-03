import React from "react";
import RoundIcon from "../icons/RoundIcon";
import Button from "../buttons/Button";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StarRatings from "react-star-ratings";
import "./SpecialCard.scss";

function SpecialCard({ title, rate, price, image, type, x, y }) {
  return (
    <div
      className={`specialCard ${type}Card`}
      style={{ left: `${x}px`, marginTop: `${y}px` }}
    >
      <div className="specialCard__top">
        <div className="specialCard__icon">
          <RoundIcon Icon={FavoriteRoundedIcon} />
        </div>
        <img src={image} className="specialCard__img" alt="" />
      </div>
      <div className="specialCard__text">
        <p className="specialCard__title">{title}</p>
      </div>
      {rate && (
        <div className="specialCard__rating">
          <StarRatings
            rating={rate}
            numberOfStars={5}
            starDimension="25px"
            starRatedColor="yellow"
            name="rating"
          />
        </div>
      )}
      <div className="specialCard__pricing">
        <p>{price}</p>
      </div>
      <Button Icon={ShoppingCartIcon} text="Add Card" />
    </div>
  );
}

export default SpecialCard;

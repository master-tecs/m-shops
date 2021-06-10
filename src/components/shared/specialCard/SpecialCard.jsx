import React from "react";
import RoundIcon from "../icons/RoundIcon";
import Button from "../buttons/Button";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StarRatings from "react-star-ratings";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  addToCart,
  loadCurrentItem,
} from "../../../state/reducers/Shopping/shoppingActions";
import "./SpecialCard.scss";

function SpecialCard({
  data,
  id,
  title,
  rate,
  price,
  image,
  x,
  y,
  type,
  addToCart,
  loadCurrentItem,
}) {
  let history = useHistory();

  const handleClick = () => {
    addToCart(id);
  };

  const handleViewitemClick = () => {
    loadCurrentItem(data);
    history.push("/item-detail");
  };
  return (
    <div
      className={`specialCard ${type}Card`}
      style={{ left: `${x}px`, marginTop: `${y}px` }}
    >
      <div className="specialCard__top" onClick={() => handleViewitemClick()}>
        <div className="specialCard__icon">
          <RoundIcon Icon={FavoriteRoundedIcon} />
        </div>
        <img src={image} className="specialCard__img" alt="" />
      </div>
      <div className="specialCard__text" onClick={() => handleViewitemClick()}>
        <p className="specialCard__title">{title}</p>
      </div>
      {rate && (
        <div
          className="specialCard__rating"
          onClick={() => handleViewitemClick()}
        >
          <StarRatings
            rating={rate}
            numberOfStars={5}
            starDimension="25px"
            starRatedColor="yellow"
            name="rating"
          />
        </div>
      )}
      <div
        className="specialCard__pricing"
        onClick={() => handleViewitemClick()}
      >
        <p>{price} QAR</p>
      </div>
      <Button
        Icon={ShoppingCartIcon}
        text="Add Card"
        handleClick={handleClick}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(SpecialCard);

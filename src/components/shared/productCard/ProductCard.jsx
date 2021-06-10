import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Button from "../buttons/Button";
import RoundIcon from "../icons/RoundIcon";
import StarRatings from "react-star-ratings";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./ProductCard.scss";

import {
  addToCart,
  loadCurrentItem,
} from "../../../state/reducers/Shopping/shoppingActions";

function ProductCard({
  data,
  id,
  title,
  image,
  price,
  rate,
  likes,
  addToCart,
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
    <div className="productCard">
      <div className="productCard__top" onClick={() => handleViewitemClick()}>
        <div className="productCard__starIcon">
          <RoundIcon Icon={StarIcon} />
        </div>
        <img src={image} className="productCard__img" alt="" />

        <div className="productCard__LikeIcon">
          <RoundIcon Icon={FavoriteIcon} />
          <p>{likes}</p>
        </div>
      </div>
      <div className="productCard__text" onClick={() => handleViewitemClick()}>
        <p className="productCard__title">{title}</p>
      </div>
      <div
        className="productCard__rating"
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
      <div
        className="productCard__pricing"
        onClick={() => handleViewitemClick()}
      >
        <p className="productCard__price">{price} QAR</p>
      </div>
      <Button text="Add Card" handleClick={handleClick} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);

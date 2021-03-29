import Button from "../buttons/Button";
import RoundIcon from "../icons/RoundIcon";
import StarRatings from "react-star-ratings";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./ProductCard.scss";

function ProductCard({ title, image, price, rate, likes }) {
  return (
    <div className="productCard">
      <div className="productCard__top">
        <div className="productCard__starIcon">
          <RoundIcon Icon={StarIcon} />
        </div>
        <img src={image} className="productCard__img" alt="" />

        <div className="productCard__LikeIcon">
          <RoundIcon Icon={FavoriteIcon} />
          <p>{likes}</p>
        </div>
      </div>
      <div className="productCard__text">
        <p className="productCard__title">{title}</p>
      </div>
      <div className="productCard__rating">
        <StarRatings
          rating={rate}
          numberOfStars={5}
          starDimension="25px"
          starRatedColor="yellow"
          name="rating"
        />
      </div>
      <div className="productCard__pricing">
        <p className="productCard__price">{price}</p>
      </div>
      <Button text="Add Card" />
    </div>
  );
}

export default ProductCard;

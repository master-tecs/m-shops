import StarRatings from "react-star-ratings";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "../../shared/buttons/Button";
import img1 from "../../../assets/img/shoes/nike/03.png";
import "./Offer.scss";
import TopTitle from "../../shared/topTitle/TopTitle";

function Offer() {
  return (
    <>
      <div className="topOffer">
        <TopTitle heading="Offer of Shops" />
      </div>
      <div className="offer">
        <Component />
        <Component />
        <Component />
      </div>
    </>
  );
}

function Component(props) {
  return (
    <div className="component">
      <div className="image">
        <img src={img1} alt="Nike Shoe" />
      </div>
      <div className="content">
        <div className="name">
          <h4>Nike</h4>
          <p>Air Max 200</p>
        </div>
        <div className="color">
          <div className="colors">
            <h4>Color: </h4>
            <div className="availableColors">
              <input
                type="checkbox"
                name="orange"
                className="colorPick"
                id="orange"
              />
              <input
                type="checkbox"
                name="blue"
                className="colorPick"
                id="blue"
              />
              <input
                type="checkbox"
                name="red"
                className="colorPick"
                id="red"
              />
              <input
                type="checkbox"
                name="green"
                className="colorPick"
                id="green"
              />
            </div>
          </div>
          <div className="rate">
            <StarRatings
              rating={4}
              numberOfStars={5}
              starDimension="20px"
              starRatedColor="yellow"
              name="rating"
            />
          </div>
        </div>
        <div className="price">
          <p>123.43 QAR</p>
        </div>
        <div className="btn">
          <Button text="Add Cart" Icon={FavoriteIcon} />
        </div>
      </div>
    </div>
  );
}

export default Offer;

import Slider from "react-slick";
import StarRatings from "react-star-ratings";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Counter from "../../../components/shared/counter/Counter";
import Button from "../../../components/shared/buttons/Button";
import "./Detail.scss";
import RoundIcon from "../../../components/shared/icons/RoundIcon";

function Detail() {
  const baseUrl = "images/nike";
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`${baseUrl}/${i + 1}.jpg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "images",
    arrows: false,
  };

  return (
    <div className="detail">
      {/* <div className="images"> */}
      <Slider {...settings}>
        <div>
          <img src={baseUrl + "/1.jpg"} alt="nike shoe-1" />
        </div>
        <div>
          <img src={baseUrl + "/2.jpg"} alt="nike shoe-1" />
        </div>
        <div>
          <img src={baseUrl + "/3.jpg"} alt="nike shoe-1" />
        </div>
        <div>
          <img src={baseUrl + "/4.jpg"} alt="nike shoe-1" />
        </div>
      </Slider>
      {/* </div> */}
      <div className="itemDetail">
        <div className="top">
          <div className="top__text">
            <h2>Nike</h2>
            <p>Air Max 200</p>
          </div>
          <div className="top__price">
            <p>129.99 QAR</p>
          </div>
        </div>
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
            <input type="checkbox" name="red" className="colorPick" id="red" />
            <input
              type="checkbox"
              name="green"
              className="colorPick"
              id="green"
            />
          </div>
        </div>
        <div className="rating">
          <h4>Product Rating</h4>
          <StarRatings
            rating={4}
            numberOfStars={5}
            starDimension="20px"
            starRatedColor="yellow"
            name="rating"
          />
        </div>
        <div className="deliveryInfo">
          <LocalShippingIcon />
          <h4>Delivery of 10%, tomorrow</h4>
        </div>
        <div className="quantity">
          <h4>Quantity:</h4>
          <div className="quantityBtns">
            <div className="btn">
              <Counter max={10} />
            </div>
            <div className="btn long">
              <Button text="Add Cart" Icon={ShoppingCartIcon} color="orange" />
            </div>
            <div className="btn favorite">
              <RoundIcon Icon={FavoriteIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

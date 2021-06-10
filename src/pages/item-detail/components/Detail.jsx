import { connect } from "react-redux";
import Slider from "react-slick";
import StarRatings from "react-star-ratings";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Counter from "../../../components/shared/counter/Counter";
import Button from "../../../components/shared/buttons/Button";
import RoundIcon from "../../../components/shared/icons/RoundIcon";
import { addToCart } from "../../../state/reducers/Shopping/shoppingActions";
import "./Detail.scss";

function Detail({ currentItem, addToCart }) {
  // const baseUrl = "images/nike";

  const handleClick = () => {
    addToCart(currentItem.id);
  };

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={currentItem.image} alt={currentItem.title} />
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
        {currentItem.images ? (
          currentItem.images.map((image, { index }) => (
            <div key={index}>
              <img src={image} alt="nike shoe-1" />
            </div>
          ))
        ) : (
          <div>
            <img src={currentItem.image} alt="nike shoe-1" />
          </div>
        )}
        {/* <div>
          <img src={baseUrl + "/2.jpg"} alt="nike shoe-1" />
        </div>
        <div>
          <img src={baseUrl + "/3.jpg"} alt="nike shoe-1" />
        </div>
        <div>
          <img src={baseUrl + "/4.jpg"} alt="nike shoe-1" />
        </div> */}
      </Slider>
      {/* </div> */}
      <div className="itemDetail">
        <div className="top">
          <div className="top__text">
            <h2>{currentItem.company}</h2>
            <p>{currentItem.title}</p>
          </div>
          <div className="top__price">
            <p>{currentItem.price} QAR</p>
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
            rating={currentItem.rate}
            numberOfStars={5}
            starDimension="20px"
            starRatedColor="yellow"
            name="rating"
          />
        </div>
        <div className="deliveryInfo">
          <LocalShippingIcon />
          {currentItem.offer && <h4>Delivery of 10%, tomorrow</h4>}
        </div>
        <div className="quantity">
          <h4>Quantity:</h4>
          <div className="quantityBtns">
            <div className="btn">
              <Counter id={currentItem.id} qty={currentItem.qty} max={10} />
            </div>
            <div className="btn long">
              <Button
                handleClick={handleClick}
                text="Add Cart"
                Icon={ShoppingCartIcon}
                color="orange"
              />
            </div>
            <div className="btn favorite">
              <RoundIcon Icon={FavoriteIcon} />
            </div>
            <p>{currentItem.likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

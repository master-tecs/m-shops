import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import StarRatings from "react-star-ratings";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "../../shared/buttons/Button";
import img1 from "../../../assets/img/shoes/nike/03.png";
import "./Offer.scss";
import TopTitle from "../../shared/topTitle/TopTitle";
import {
  addToCart,
  loadCurrentItem,
} from "../../../state/reducers/Shopping/shoppingActions";

function Offer({ offers, addToCart, loadCurrentItem }) {
  return (
    <>
      <div className="topOffer">
        <TopTitle heading="Offer of Shops" />
      </div>
      <div className="offer">
        {offers.map((item) => (
          <Component
            key={item.id}
            data={item}
            addToCart={addToCart}
            loadCurrentItem={loadCurrentItem}
          />
        ))}
      </div>
    </>
  );
}

function Component({ data, addToCart, loadCurrentItem }) {
  const { company, title, price, rate, image } = data;
  let history = useHistory();

  const handleAddToCart = () => {
    addToCart(data.id);
  };

  const handleViewitemClick = () => {
    loadCurrentItem(data);
    history.push("/item-detail");
  };

  return (
    <div className="component">
      <div
        className="offerComponent__left"
        onClick={() => handleViewitemClick()}
      >
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="offerContainer">
          <div className="content">
            <div className="name">
              <h4>{company}</h4>
              <p>{title}</p>
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
                  rating={rate}
                  numberOfStars={5}
                  starDimension="20px"
                  starRatedColor="yellow"
                  name="rating"
                />
              </div>
            </div>
          </div>
          <div className="price">
            <p>{price} QAR</p>
          </div>
        </div>
      </div>
      <div className="offerBtn">
        <Button
          text="Add Cart"
          handleClick={handleAddToCart}
          Icon={ShoppingCartIcon}
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

const mapStateToProps = (state) => {
  return {
    offers: state.shop.offers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offer);

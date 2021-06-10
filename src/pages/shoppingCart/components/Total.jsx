import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SendIcon from "@material-ui/icons/Send";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "../../../components/shared/buttons/Button";
import "./Total.scss";

function Total({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);

  let history = useHistory();

  useEffect(() => {
    let price = 0;

    cart.forEach((item) => {
      price += item.qty * item.price;
      setTotalPrice(price);
    });
  }, [cart, totalPrice]);

  const handleBackClick = () => {
    history.goBack();
  };

  // const handleClick = () => {
  //   history.goBack();
  // };
  return (
    <div className="total">
      <div className="total__back" onClick={handleBackClick}>
        <ArrowBackIcon />
        <p>Countine Shopping</p>
      </div>
      <div className="total__promo">
        <input type="text" placeholder="Promo code" />
        <div className="promo__sendIcon">
          <SendIcon />
        </div>
      </div>
      <div className="total__price">
        <p>Totla cost</p>
        <p className="total__price--amount">{totalPrice} QAR</p>
      </div>
      <Link to="/payment" className="total__btn">
        <Button text="CHECKOUT" color="orange" />
      </Link>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Total);

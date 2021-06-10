// import { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import Item from "../../../components/shared/Item/Item";
import Total from "./Total";
import RoundIcon from "../../../components/shared/icons/RoundIcon";
import "./ItemsInCart.scss";

import { connect } from "react-redux";
import { removeFromCart } from "../../../state/reducers/Shopping/shoppingActions";

function ItemsInCart({ cart, removeFromCart }) {
  const handleClick = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="itemsInCart">
      <div className="itemsInCart__top">
        <h3>Shopping Cart</h3>
        <div className="steps">
          <div className="steps__activeIcon">
            <RoundIcon Icon={ShoppingCartIcon} />
          </div>
          <span>-------</span>
          <div className="steps__icon">
            <LocalShippingIcon />
          </div>
        </div>
      </div>
      {cart.map(({ id, title, price, qty, offer, image }) => (
        <Item
          key={id}
          id={id}
          title={title}
          price={price}
          offer={offer}
          qty={qty}
          image={image}
          buttons={true}
          handleClick={handleClick}
        />
      ))}
      <Total />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsInCart);

import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Item from "../Item/Item";
import "./ShippingItem.scss";

function ShippingItem({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;

    cart.forEach((item) => {
      price += item.qty * item.price;
      setTotalPrice(price);
    });
  }, [cart, totalPrice]);

  return (
    <div className="shippingItem">
      <div className="shippingItem__top">
        <h4>Shipping Information</h4>
      </div>
      <div className="shippingItem__bottom">
        <div className="itemReview">
          {cart.map(({ id, title, price, offer, image }) => (
            <Item
              key={id}
              id={id}
              title={title}
              price={price}
              offer={offer}
              image={image}
              buttons={false}
              // handleClick={handleClick}
            />
          ))}
        </div>
        <div className="totalReview">
          {/* <div className="total"> */}
          <p>Total cost: </p>
          <p>{totalPrice} QAR</p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(ShippingItem);

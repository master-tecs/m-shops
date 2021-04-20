// import { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import Item from "../../../components/shared/Item/Item";
import Total from "./Total";
import RoundIcon from "../../../components/shared/icons/RoundIcon";
import "./ItemsInCart.scss";

import img1 from "../../../assets/img/shoes/nike/01.png";
// import img2 from "../../../assets/img/shoes/nike/02.png";
// import img3 from "../../../assets/img/shoes/nike/03.png";

function ItemsInCart() {
  // const [data, setData] = useState([img1, ])

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
      <Item image={img1} buttons={true} />
      <Item image={img1} buttons={true} />
      <Item image={img1} buttons={true} />
      <Total />
    </div>
  );
}

export default ItemsInCart;

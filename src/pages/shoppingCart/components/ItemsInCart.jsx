import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import Item from "./Item";
import Total from "./Total";
import RoundIcon from "../../../components/shared/icons/RoundIcon";
import "./ItemsInCart.scss";

import img1 from "../../../assets/img/shoes/nike/04.png";

function ItemsInCart() {
  return (
    <div className="itemsInCart">
      <div className="itemsInCart__top">
        <h3>Shopping Cart</h3>
        <div className="steps">
          <div className="steps__activeIcon">
            <RoundIcon Icon={ShoppingCartIcon} />
          </div>
          <span>----------</span>
          <div className="steps__icon">
            <LocalShippingIcon />
          </div>
        </div>
      </div>
      <Item image={img1} />
      <Item image={img1} />
      <Item image={img1} />
      <Total />
    </div>
  );
}

export default ItemsInCart;

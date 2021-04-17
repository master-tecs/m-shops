import Quality from "../../components/layout/quality/Quality";
import ItemsInCart from "./components/ItemsInCart";
import "./ShoppingCart.scss";

function ShoppingCart() {
  return (
    <div className="shoppingCart">
      <ItemsInCart />
      <Quality />
    </div>
  );
}

export default ShoppingCart;

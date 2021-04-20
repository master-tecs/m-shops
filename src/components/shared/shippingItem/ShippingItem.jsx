import Item from "../Item/Item";
import "./ShippingItem.scss";

import img1 from "../../../assets/img/shoes/nike/01.png";

function ShippingItem() {
  return (
    <div className="shippingItem">
      <div className="shippingItem__top">
        <h4>Shipping Information</h4>
      </div>
      <div className="shippingItem__bottom">
        <div className="itemReview">
          <Item image={img1} buttons={false} />
          <Item image={img1} buttons={false} />
        </div>
        <div className="totalReview">
          {/* <div className="total"> */}
          <p>Total cost</p>
          <p>$553</p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default ShippingItem;

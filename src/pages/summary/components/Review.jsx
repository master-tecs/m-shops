import PaymentMethod from "./PaymentMethod";
import { Top, Bottom } from "../../payment/components/PaymentComponent";
import "./Review.scss";
import ShippingItem from "../../../components/shared/shippingItem/ShippingItem";

function Review() {
  return (
    <div className="review">
      <div className="review__top">
        <Top />
        <PaymentMethod />
      </div>
      <div className="review__bottom">
        <ShippingItem />
        <Bottom />
      </div>
    </div>
  );
}

export default Review;

import Button from "../../../components/shared/buttons/Button";
import img from "../../../assets/img/logos/paypal.png";
import "./DeliveryMethodCard.scss";

function DeliveryMethodCard() {
  return (
    <div className="deliveryMethodCard">
      <div className="deliveryMethodCard__logo">
        <img src={img} alt="" />
      </div>
      <div className="deliveryMethodCard__detail">
        <h4>$12.00</h4>
        <p>Cash on delivery</p>
        <Button text="Change" color="white" />
      </div>
    </div>
  );
}

export default DeliveryMethodCard;

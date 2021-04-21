import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import RoundIcon from "../../../components/shared/icons/RoundIcon";
import LoginOrSignup from "../../../components/shared/loginOrSignup/LoginOrSignup";
import Button from "../../../components/shared/buttons/Button";
import "./PaymentComponent.scss";
import ShippingInfo from "./ShippingInfo";
import ShippingItem from "../../../components/shared/shippingItem/ShippingItem";

function PaymentComponent() {
  return (
    <div className="paymentComponent">
      <Top />
      {/* login first */}
      <LoginOrSignup />
      {/* shipping info */}
      <ShippingInfo />
      {/* shipping info */}
      <ShippingItem />
      {/* bottom */}
      <Bottom />
    </div>
  );
}

function Top() {
  return (
    <div className="paymentComponent__top">
      <h3>Shipping and Payment</h3>
      <div className="steps">
        <div className="steps__doneIcon">
          <RoundIcon Icon={ShoppingCartIcon} type="stepsDoneIcon" />
        </div>
        <span>----</span>
        <div className="steps__activeIcon">
          <RoundIcon Icon={LocalShippingIcon} />
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="bottom">
      <div className="bottom__back">
        <Button text="Back" Icon={ArrowBackIcon} color="transparent" />
      </div>
      <div className="bottom__delivary">
        <LocalShippingIcon />
        <p>You are $30.02 missing for free shipping</p>
      </div>
      <div className="bottom__shipping">
        <Button text="Continue Shipping" />
      </div>
      <div className="bottom__payment">
        <Button text="Procced to payment" color="orange" />
      </div>
    </div>
  );
}

export default PaymentComponent;

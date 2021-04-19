import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import RoundIcon from "../../../components/shared/icons/RoundIcon";
import LoginOrSignup from "../../../components/shared/loginOrSignup/LoginOrSignup";
import "./PaymentComponent.scss";

function PaymentComponent() {
  return (
    <div className="paymentComponent">
      <Top />
      {/* login first */}
      <LoginOrSignup />
      {/* shipping info */}
      {/* shipping info */}
      {/* bottom */}
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
        <span>-------</span>
        <div className="steps__doneIcon">
          <RoundIcon Icon={ShoppingCartIcon} type="stepsDoneIcon" />
        </div>
        <span>-------</span>
        <div className="steps__activeIcon">
          <RoundIcon Icon={LocalShippingIcon} />
        </div>
      </div>
    </div>
  );
}

export default PaymentComponent;

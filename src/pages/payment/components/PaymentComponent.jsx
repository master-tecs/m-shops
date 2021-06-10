import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import RoundIcon from "../../../components/shared/icons/RoundIcon";
import LoginOrSignup from "../../../components/shared/loginOrSignup/LoginOrSignup";
import Button from "../../../components/shared/buttons/Button";
import ShippingInfo from "./ShippingInfo";
import ShippingItem from "../../../components/shared/shippingItem/ShippingItem";
import { Link, useHistory } from "react-router-dom";
import "./PaymentComponent.scss";

function PaymentComponent() {
  return (
    <div className="paymentComponent">
      <Top title={"Shipping and Payment"} />
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

export function Top({ title }) {
  return (
    <div className="paymentComponent__top">
      <h3>{title}</h3>
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

export function Bottom() {
  let history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };

  const handleContinueShippingClick = () => {
    history.push("/home");
  };

  const handleSummaryClick = () => {
    history.push("/summary");
  };

  return (
    <div className="bottom">
      <div className="bottom__back" onClick={() => handleBackClick()}>
        <Button text="Back" Icon={ArrowBackIcon} color="transparent" />
      </div>
      <div className="bottom__delivary">
        <LocalShippingIcon />
        <p>You are $30.02 missing for free shipping</p>
      </div>
      <div
        className="bottom__shipping"
        onClick={() => handleContinueShippingClick()}
      >
        <Button text="Continue Shipping" color="transparent" />
      </div>
      <div className="bottom__payment" onClick={() => handleSummaryClick()}>
        <Button text="Procced to payment" color="orange" />
      </div>
    </div>
  );
}

export default PaymentComponent;

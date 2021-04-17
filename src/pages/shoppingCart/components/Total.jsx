import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SendIcon from "@material-ui/icons/Send";
import Button from "../../../components/shared/buttons/Button";
import "./Total.scss";

function Total() {
  return (
    <div className="total">
      <div className="total__back">
        <ArrowBackIcon />
        <p>Countine Shopping</p>
      </div>
      <div className="total__promo">
        <input type="text" placeholder="Promo code" />
        <div className="promo__sendIcon">
          <SendIcon />
        </div>
      </div>
      <div className="total__price">
        <p>Totla cost</p>
        <p className="total__price--amount">233.49 QAR</p>
      </div>
      <div className="total__btn">
        <Button text="CHECKOUT" color="orange" />
      </div>
    </div>
  );
}

export default Total;

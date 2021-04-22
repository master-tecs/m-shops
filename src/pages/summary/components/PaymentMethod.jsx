import PayMethod from "../../../components/shared/payMethod/PayMethod";
import "./PaymentMethod.scss";
import paypal from "../../../assets/img/logos/paypal.png";
import TextInput from "../../../components/shared/inputs/TextInput";
import DeliveryMethodCard from "./DeliveryMethodCard";

function PaymentMethod() {
  return (
    <div className="paymentMethod">
      <div className="paymentMethod__top">
        <div className="paymentMethod__top--left">
          <div className="paymentMethod__title">
            <h4>Payment Method</h4>
          </div>
          <div className="paymentMethod__options">
            <PayMethod logo={paypal} />
            <PayMethod logo={paypal} />
            <PayMethod logo={paypal} />
            <PayMethod logo={paypal} />
            <PayMethod logo={paypal} />
            <PayMethod logo={paypal} />
          </div>
        </div>

        <div className="paymentMethod__top--right">
          <div className="deliveryMethod__title">
            <h4>Delivery Method</h4>
          </div>
          <div className="deliveryMethod__options">
            <DeliveryMethodCard />
          </div>
        </div>
      </div>

      <div className="paymentMethod__bottom">
        <div className="paymentMethod__bottom--title">
          <h4>Shipping Information</h4>
        </div>
        <div className="paymentMethod__bottom--input">
          <div>
            <TextInput name="Name" background="blue" />
          </div>
          <div>
            <TextInput name="Email" background="blue" />
          </div>
          <div>
            <TextInput name="Phone number" background="blue" />
          </div>
          <div>
            <TextInput name="First name" background="blue" />
          </div>
          <div>
            <TextInput name="Address" background="blue" />
          </div>
          <div>
            <TextInput name="Postal code / ZIP" background="blue" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;

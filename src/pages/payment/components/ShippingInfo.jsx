import TextInput from "../../../components/shared/inputs/TextInput";
import PayMethod from "../../../components/shared/payMethod/PayMethod";
import "./ShippingInfo.scss";

import paypal from "../../../assets/img/logos/paypal.png";

function ShippingInfo() {
  return (
    <div className="shippingInfo">
      <div className="info">
        <div className="info__top">
          <h4>Shipping Information</h4>
        </div>
        <div className="info__input">
          <TextInput name="Name" />
          <TextInput name="First name" />
          <TextInput name="Email" />
          <TextInput name="City" />
          <TextInput name="Address" />
          <TextInput name="Postal Code / Zip" />
          <TextInput name="Phone number" />
          <TextInput name="Country" />
        </div>
      </div>

      <div className="paymentMethods">
        <div className="paymentMethods__top">
          <h4>Payment Method</h4>
        </div>
        <div className="paymentMethods__options">
          <PayMethod logo={paypal} />
          <PayMethod logo={paypal} />
          <PayMethod logo={paypal} />
          <PayMethod logo={paypal} />
          <PayMethod logo={paypal} />
          <PayMethod logo={paypal} />
        </div>

        <div className="deliveryMethods__top">
          <h4>Delivery Method</h4>
        </div>
        <div className="deliveryMethods__options">
          <PayMethod logo={paypal} text="$30" />
          <PayMethod logo={paypal} text="$30" />
          <PayMethod logo={paypal} text="$30" />
          <PayMethod logo={paypal} text="$30" />
        </div>
      </div>
    </div>
  );
}

export default ShippingInfo;

import TextInput from "../../../components/shared/inputs/TextInput";
import PayMethod from "../../../components/shared/payMethod/PayMethod";
import "./ShippingInfo.scss";

import paypal from "../../../assets/img/logos/paypal.png";

function ShippingInfo() {
  return (
    <div className="shippingInfo">
      <div className="info">
        {/* inputs */}
        <TextInput name="Name" />
      </div>
      <div className="paymentMethods">
        {/* methods */}
        <PayMethod logo={paypal} />
      </div>
    </div>
  );
}

export default ShippingInfo;

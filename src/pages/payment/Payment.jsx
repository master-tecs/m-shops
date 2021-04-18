import Quality from "../../components/layout/quality/Quality";
import PaymentComponent from "./components/PaymentComponent";
import "./Payment.scss";

function Payment() {
  return (
    <div className="payment">
      <PaymentComponent />
      <Quality />
    </div>
  );
}

export default Payment;

import "./PayMethod.scss";

function PayMethod({ logo }) {
  return (
    <div className="payMethod">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default PayMethod;

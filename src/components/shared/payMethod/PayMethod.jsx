import "./PayMethod.scss";

function PayMethod({ logo, text }) {
  return (
    <div className="payMethod">
      <img src={logo} alt="logo" />
      {text && <p>{text}</p>}
    </div>
  );
}

export default PayMethod;

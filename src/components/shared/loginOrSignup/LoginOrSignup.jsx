import Button from "../../shared/buttons/Button";
import "./LoginOrSignup.scss";

function LoginOrSignup() {
  return (
    <div className="loginOrSignup">
      <div className="signup">
        <Button text="Login" />
      </div>
      <div className="signup">
        <Button text="SIGN UP" color="transparent" />
      </div>
    </div>
  );
}

export default LoginOrSignup;

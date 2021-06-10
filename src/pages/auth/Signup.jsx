import TextInput from "../../components/shared/inputs/TextInput";
import Button from "../../components/shared/buttons/Button";
import "./LoginForm.scss";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="login">
      <form action="" className="loginForm">
        <div className="loginForm__top">
          <h3>Sign up</h3>
          <TextInput name="Name" />
          <TextInput name="Email" type="email" />
          <TextInput name="Password" type="password" />
          <TextInput name="Confirm password" type="password" />
          <div className="loginForm__btn">
            <Button text="Register" />
          </div>
        </div>
        <div className="loginForm__mid">
          {/* <p>Forget your password?</p> */}
        </div>
        <div className="loginForm__bottom">
          <p>Already have an account?</p>
          <Link to="/login">Sign in</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;

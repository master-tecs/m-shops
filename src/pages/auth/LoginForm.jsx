import TextInput from "../../components/shared/inputs/TextInput";
import Button from "../../components/shared/buttons/Button";
import "./LoginForm.scss";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <form action="" className="loginForm">
      <div className="loginForm__top">
        <h3>Login</h3>
        <TextInput name="Email" type="email" />
        <TextInput name="Password" type="password" />
        <div>
          <Button text="Login" />
        </div>
      </div>
      <div className="loginForm__mid">
        <Link to="/forget">
          <p>Forget your password?</p>
        </Link>
      </div>
      <div className="loginForm__bottom">
        <p>Don't have an account?</p>
        <Link to="/signup">Sign up</Link>
      </div>
    </form>
  );
}

export default LoginForm;

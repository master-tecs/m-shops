import TextInput from "../../components/shared/inputs/TextInput";
import Button from "../../components/shared/buttons/Button";
import "./LoginForm.scss";

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
        <p>Forget your password?</p>
      </div>
      <div className="loginForm__bottom">
        <p>Don't have an account?</p>
        <a href="#">Sign in</a>
      </div>
    </form>
  );
}

export default LoginForm;

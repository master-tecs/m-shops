import TextInput from "../../components/shared/inputs/TextInput";
import "./LoginForm.scss";

function LoginForm() {
  return (
    <form action="" className="login">
      <TextInput name="Email" type="email" />
    </form>
  );
}

export default LoginForm;

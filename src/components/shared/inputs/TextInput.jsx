import "./TextInput.scss";

function TextInput({ name }) {
  return (
    <div className="textInput">
      <input type="text" placeholder={name} name={name} />
    </div>
  );
}

export default TextInput;

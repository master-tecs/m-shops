import "./TextInput.scss";

function TextInput({ name, type = "text", background }) {
  return (
    <div className={`textInput ${background}`}>
      <input type={type} placeholder={name} name={name} />
    </div>
  );
}

export default TextInput;

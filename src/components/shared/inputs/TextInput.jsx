import "./TextInput.scss";

function TextInput({ name, background }) {
  return (
    <div className={`textInput ${background}`}>
      <input type="text" placeholder={name} name={name} />
    </div>
  );
}

export default TextInput;

import { Button as MaterialButton } from "@material-ui/core";
import React from "react";
import "./Button.scss";

function Button({
  text,
  Icon,
  color,
  showOnlyOnSmallDivce,
  dontShowTextOnSmallDivce,
  handleClick,
}) {
  const clickHandler = () => {
    if (handleClick) {
      handleClick();
    }
    return;
  };
  return (
    <MaterialButton
      className={`button ${color}`}
      onClick={() => clickHandler()}
    >
      <div
        className={`button__icon ${
          showOnlyOnSmallDivce && "showOnlyOnSmallDivce"
        }`}
      >
        {Icon && <Icon />}
      </div>
      <p
        className={`button__text ${
          dontShowTextOnSmallDivce && "dontShowTextOnSmallDivce"
        }`}
      >
        {text}
      </p>
    </MaterialButton>
  );
}

export default Button;

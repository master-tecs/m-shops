import { Button as MaterialButton } from "@material-ui/core";
import React from "react";
import "./Button.scss";

function Button({ text, Icon, showOnlyOnSmallDivce }) {
  return (
    <MaterialButton className="button">
      <div
        className={`button__icon ${
          showOnlyOnSmallDivce && "showOnlyOnSmallDivce"
        }`}
      >
        {Icon && <Icon />}
      </div>
      <p>{text}</p>
    </MaterialButton>
  );
}

export default Button;

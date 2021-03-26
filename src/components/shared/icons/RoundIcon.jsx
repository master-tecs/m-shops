import { IconButton } from "@material-ui/core";
import React from "react";
import "./RoundIcon.scss";

function RoundIcon({ Icon, type }) {
  return (
    <IconButton className={`roundIcon ${type}`}>
      <Icon className="roundIcon__icon" />
    </IconButton>
  );
}

export default RoundIcon;

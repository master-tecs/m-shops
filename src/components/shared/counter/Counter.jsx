import { useState } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";
import "./Counter.scss";

function Counter({ max }) {
  const [counter, setCounter] = useState(1);
  return (
    <div className="counter">
      <IconButton onClick={() => counter > 0 && setCounter(counter - 1)}>
        <RemoveIcon />
      </IconButton>
      <h4>{counter}</h4>
      <IconButton onClick={() => counter < max && setCounter(counter + 1)}>
        <AddIcon />
      </IconButton>
    </div>
  );
}

export default Counter;

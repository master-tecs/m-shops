import { useState } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";
import "./Counter.scss";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  adjustQty,
  removeFromCart,
} from "../../../state/reducers/Shopping/shoppingActions";

function Counter({ id, max, color, qty, adjustQty, removeFromCart }) {
  const [counter, setCounter] = useState(qty);
  useEffect(() => {
    adjustQty(id, counter);
    if (counter <= 0) {
      removeFromCart(id);
    }
  }, [id, adjustQty, counter, setCounter, removeFromCart]);

  return (
    <div className={`counter ${color}`}>
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
const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Counter);

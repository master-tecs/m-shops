import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ClearIcon from "@material-ui/icons/Clear";
import Counter from "../../../components/shared/counter/Counter";
import RoundIcon from "../../../components/shared/icons/RoundIcon";
import "./Item.scss";

function Item({ image }) {
  return (
    <div className="item">
      <div className="item__details">
        <img src={image} alt="Nike Shoe" />
        <div className="mainInfo">
          <h4>Nike Air Max 200</h4>
          <div className="slelectedColors">
            <h4>Color: </h4>
            <input
              type="checkbox"
              name="orange"
              className="colorPick"
              id="orange"
            />
          </div>
          <div className="delivery">
            <LocalShippingIcon />
            <p>Delivery of 10%</p>
          </div>
        </div>
      </div>
      <div className="actions">
        <div className="actions__left">
          <Counter max={11} color="orange" />
          <div className="price">
            <p>123.43 QAR</p>
          </div>
        </div>
        <div className="clear">
          <RoundIcon Icon={ClearIcon} />
        </div>
      </div>
    </div>
  );
}

export default Item;

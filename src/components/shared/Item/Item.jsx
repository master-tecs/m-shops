import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ClearIcon from "@material-ui/icons/Clear";
import Counter from "../counter/Counter";
import RoundIcon from "../icons/RoundIcon";
import "./Item.scss";

function Item({ id, image, buttons, title, qty, price, offer, handleClick }) {
  return (
    <div className="item">
      <div className="item__details">
        <img src={image} alt="Nike Shoe" />
        <div className="mainInfo">
          <h4>{title}</h4>
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
            {offer ? (
              <>
                <LocalShippingIcon />
                <p>Delivery 10%</p>
              </>
            ) : (
              <>
                <LocalShippingIcon />
                <p>No Discount</p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="actions">
        <div className="actions__left">
          {buttons && (
            <div className="left__counter">
              <Counter id={id} qty={qty} max={11} color="orange" />
            </div>
          )}
          <div className="price">
            <p>{price} QAR</p>
          </div>
        </div>
        {buttons && (
          <div className="clear" onClick={() => handleClick(id)}>
            <RoundIcon Icon={ClearIcon} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Item;

import React, { useState } from "react";
import NavMenu from "./NavMenu";
import RoundIcon from "../../shared/icons/RoundIcon";
import Button from "../../shared/buttons/Button";
import SideMenu from "../../feature/SideMenu";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import ModeCommentRoundedIcon from "@material-ui/icons/ModeCommentRounded";
import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
import ShortTextIcon from "@material-ui/icons/ShortText";
// import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded"; This Might look beter for logo
import "./Nav.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";

function Nav({ cart }) {
  const [sidebar, setSidebar] = useState(false);
  const [cardCount, setCardCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCardCount(count);
  }, [cart, cardCount]);

  return (
    <div className="nav">
      <div className="nav__navBar" onClick={() => setSidebar(!sidebar)}>
        <ShortTextIcon />
      </div>
      <SideMenu sidebar={sidebar} setSidebar={setSidebar} />
      <Link to="/" className="nav__logo">
        <div className="nav__icon">
          <RoundIcon Icon={LocalMallRoundedIcon} type="logoIconColor" />
        </div>
        <p>
          <span>ALL</span> Shops
        </p>
      </Link>
      <NavMenu />
      <div className="nav__actions">
        <div className="nav__icon">
          <RoundIcon Icon={ModeCommentRoundedIcon} type="navIconColor" />
        </div>
        <div className="nav__icon">
          <RoundIcon Icon={FavoriteRoundedIcon} type="navIconColor" />
        </div>
        {cardCount !== 0 && (
          <Link to="/shopping-cart" className="count">
            <span>{cardCount}</span>
          </Link>
        )}
        <Link to="/shopping-cart" className="nav__icon showOnSmallDevice">
          <RoundIcon Icon={ShoppingCartRoundedIcon} type="navIconColor" />
        </Link>
        <div className="nav__btn">
          <Link to="/login">
            <Button text="Log in" />
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Nav);

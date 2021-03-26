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

function Nav() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="nav">
      <div className="nav__navBar" onClick={() => setSidebar(!sidebar)}>
        <ShortTextIcon />
      </div>
      <SideMenu sidebar={sidebar} setSidebar={setSidebar} />
      <div className="nav__logo">
        <div className="nav__icon">
          <RoundIcon Icon={LocalMallRoundedIcon} type="logoIconColor" />
        </div>
        <p>
          <span>ALL</span> Shops
        </p>
      </div>
      <NavMenu />
      <div className="nav__actions">
        <div className="nav__icon">
          <RoundIcon Icon={ModeCommentRoundedIcon} type="navIconColor" />
        </div>
        <div className="nav__icon">
          <RoundIcon Icon={FavoriteRoundedIcon} type="navIconColor" />
        </div>
        <div className="nav__icon showOnSmallDevice">
          <RoundIcon Icon={ShoppingCartRoundedIcon} type="navIconColor" />
        </div>
        <div className="nav__btn">
          <Button text="Log in" />
        </div>
      </div>
    </div>
  );
}

export default Nav;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import RoundIcon from "../../shared/icons/RoundIcon";
import Button from "../../shared/buttons/Button";
import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import ShopIcon from "@material-ui/icons/Shop";
import AppleIcon from "@material-ui/icons/Apple";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <div className="footer__icon">
          <RoundIcon Icon={LocalMallRoundedIcon} type="logoIconColor" />
        </div>
        <p>
          <span>ALL</span> Shops
        </p>
      </div>
      <div className="footer__contents">
        <div className="footer__header">
          <h2>Help</h2>
          <a href="#">Order Status</a>
          <a href="#">Shipping and Delivery</a>
          <a href="#">Returns</a>
          <a href="#">Payment Option</a>
        </div>
        <div className="footer__header">
          <h2>Solution</h2>
          <a href="#">Order Status</a>
          <a href="#">Shipping and Delivery</a>
          <a href="#">Returns</a>
          <a href="#">Payment Option</a>
        </div>
        <div className="footer__header">
          <h2>Sections</h2>
          <a href="#">Order Status</a>
          <a href="#">Shipping and Delivery</a>
          <a href="#">Returns</a>
          <a href="#">Payment Option</a>
        </div>
        <div className="footer__email">
          <h1 className="1">NEWSLETTER</h1>
          <a href="#">To our newsletter</a>
          <div className="footer__emailAction">
            <input
              type="text"
              className="footer__emailText"
              placeholder="Send Your Email"
            />
            <div>
              <Button text="Subscribe" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__info">
        <div className="footer__location">
          <LocationOnIcon />
          <p> Location of our shops</p>
        </div>
        <div className="footer__socialMedias">
          <div className="footer__icon">
            <InstagramIcon />
          </div>
          <div className="footer__icon">
            <YouTubeIcon />
          </div>
          <div className="footer__icon">
            <TwitterIcon />
          </div>
          <div className="footer__icon">
            <FacebookIcon />
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="bottom__left">
          <p>Contact</p>
          <p>PrivacyPolicy</p>
          <p>Career</p>
          <p>Web Map</p>
        </div>
        <div className="bottom__right">
          <div className="right__btn">
            <Button text="Get it on Google play" Icon={ShopIcon} />
          </div>
          <div className="right__btn">
            <Button text="Download it on App Store" Icon={AppleIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

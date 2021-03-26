import ModeCommentRoundedIcon from "@material-ui/icons/ModeCommentRounded";
import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
import React from "react";
import RoundIcon from "../icons/RoundIcon";
import "./Search.scss";

function Search() {
  return (
    <div className="search">
      <ModeCommentRoundedIcon className="search__commentIcon" />
      <input type="text" className="search__input" placeholder="Search" />
      <div className="search__logoIcon showOnSmallDevice">
        <RoundIcon Icon={LocalMallRoundedIcon} type="logoIconColor" />
      </div>
    </div>
  );
}

export default Search;

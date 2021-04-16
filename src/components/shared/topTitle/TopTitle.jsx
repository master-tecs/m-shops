import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./TopTitle.scss";

function TopTitle({ heading, showNew }) {
  return (
    <div className="top">
      <div className="top__left">
        <p className="top__heading">{heading}</p>
        {showNew && <label className="label">New</label>}
      </div>
      <div className="top__right">
        <p>See all</p>
        <ArrowRightAltIcon />
      </div>
    </div>
  );
}

export default TopTitle;

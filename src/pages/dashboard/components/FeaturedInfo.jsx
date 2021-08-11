import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "./FeaturedInfo.scss";

function FeaturedInfo({ title, price, rate }) {
  return (
    <div className="featured">
      <span className="featured__title">{title}</span>
      <div>
        <span className="featured__money">${price}</span>
        <span className="featured__moneyRate">
          {rate > 0 && "+"}
          {rate}
          {rate > 0 ? (
            <ArrowUpwardIcon className="featured__icon" />
          ) : (
            <ArrowDownwardIcon className="featured__icon--nagetive" />
          )}
        </span>
      </div>
      <span className="featured__sub">Compared to the last month.</span>
    </div>
  );
}

export default FeaturedInfo;

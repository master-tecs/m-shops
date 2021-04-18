import Quality from "../../components/layout/quality/Quality";
import Review from "./components/Review";
import "./Summary.scss";

function Summary() {
  return (
    <div className="summary">
      <Review />
      <Quality />
    </div>
  );
}

export default Summary;

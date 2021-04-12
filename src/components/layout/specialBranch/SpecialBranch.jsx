import BranchSlide from "./component/BranchSlide";
import "./SpecialBranch.scss";

function SpecialBranch() {
  return (
    <div className="specialBranch">
      <BranchSlide num={"one"} />
      <BranchSlide num={"two"} />
      <BranchSlide num={"three"} />
    </div>
  );
}

export default SpecialBranch;

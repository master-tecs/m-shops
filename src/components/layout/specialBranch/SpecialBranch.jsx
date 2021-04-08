import BranchSlide from "./component/BranchSlide";
import "./SpecialBranch.scss";

function SpecialBranch() {
  return (
    <div className="specialBranch">
      <BranchSlide />
      <BranchSlide vertical={"vertical"} />
      <BranchSlide />
    </div>
  );
}

export default SpecialBranch;

import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import PaymentIcon from "@material-ui/icons/Payment";
import HighQualityIcon from "@material-ui/icons/HighQuality";
import "./Quality.scss";

function Quality({ background }) {
  return (
    <div className={`quality ${background}`}>
      <Component
        title="Free Shipping"
        Icon={ArtTrackIcon}
        color="orange"
        details="All purchases over $99 are eligacle for free shipping via USPS First Class Mail."
      />
      <Component
        title="Easy Payments"
        Icon={PaymentIcon}
        color="secondary"
        details="All payments are processed instantly over a secure protocol."
      />
      <Component
        title="Money-Back Garantee"
        Icon={LocalAtmIcon}
        color="lightBlue"
        details="If an item arrived damaged or you have changed your mind, you can send it back for full refund."
      />
      <Component
        title="Finest Quality"
        Icon={HighQualityIcon}
        color="pink"
        details="Designed to last, each of our products has been clerifed with the finest materials."
      />
    </div>
  );
}

function Component({ title, Icon, color, details }) {
  return (
    <div className="component">
      <div className={`component__icon ${color}`}>
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{details}</p>
    </div>
  );
}

export default Quality;

import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import PaymentIcon from "@material-ui/icons/Payment";
import HighQualityIcon from "@material-ui/icons/HighQuality";
import "./Quality.scss";

function Quality() {
  return (
    <div className="quality">
      <Component title="Free Shipping" Icon={ArtTrackIcon} color="orange" />
      <Component title="Easy Payments" Icon={PaymentIcon} color="secondary" />
      <Component
        title="Money-Back Garantee"
        Icon={LocalAtmIcon}
        color="lightBlue"
      />
      <Component title="Finest Quality" Icon={HighQualityIcon} color="pink" />
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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore nemo
        similique corporis ipsam perspiciatis consequuntur!
      </p>
    </div>
  );
}

export default Quality;

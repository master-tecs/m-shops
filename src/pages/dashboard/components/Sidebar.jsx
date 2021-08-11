import LineStyleIcon from "@material-ui/icons/LineStyle";
import TimelineIcon from "@material-ui/icons/Timeline";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import StorefrontIcon from "@material-ui/icons/Storefront";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BarChartIcon from "@material-ui/icons/BarChart";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import ReportIcon from "@material-ui/icons/Report";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* dashboard */}
      <div className="sidebar__menu">
        <h3>Dashboard</h3>
        <ul>
          <li className="sidebar__menu--active">
            <LineStyleIcon />
            <p>Home</p>
          </li>
          <li>
            <TimelineIcon />
            <p>Analytics</p>
          </li>
          <li>
            <TrendingUpIcon />
            <p>Sales</p>
          </li>
        </ul>
      </div>

      {/* quick menu */}
      <div className="sidebar__menu">
        <h3>Quick Menu</h3>
        <ul>
          <li>
            <PermIdentityIcon />
            <p>Users</p>
          </li>
          <li>
            <StorefrontIcon />
            <p>Products</p>
          </li>
          <li>
            <AttachMoneyIcon />
            <p>Transactions</p>
          </li>
          <li>
            <BarChartIcon />
            <p>Report</p>
          </li>
        </ul>
      </div>

      {/* notifications */}
      <div className="sidebar__menu">
        <h3>Notifications</h3>
        <ul>
          <li>
            <MailOutlineIcon />
            <p>Mail</p>
          </li>
          <li>
            <DynamicFeedIcon />
            <p>Feedback</p>
          </li>
          <li>
            <ChatBubbleIcon />
            <p>Messages</p>
          </li>
        </ul>
      </div>

      {/* staff */}
      <div className="sidebar__menu">
        <h3>Staff</h3>
        <ul>
          <li>
            <WorkOutlineIcon />
            <p>Manage</p>
          </li>
          <li>
            <TimelineIcon />
            <p>Analytics</p>
          </li>
          <li>
            <ReportIcon />
            <p>Report</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

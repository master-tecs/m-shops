import MainDashboard from "./components/MainDashboard";
import Sidebar from "./components/Sidebar";
import "./Dashboard.scss";

function dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <MainDashboard />
    </div>
  );
}

export default dashboard;

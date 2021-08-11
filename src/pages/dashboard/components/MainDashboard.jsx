import Chart from "../../../components/feature/chart/Chart";
import FeaturedInfo from "./FeaturedInfo";
import "./MainDashboard.scss";

function MainDashboard() {
  const data = [
    {
      name: "Jan",
      "Active user": 4000,
      "Total User": 5000,
    },
    {
      name: "Feb",
      "Active user": 2400,
      "Total User": 5354,
    },
    {
      name: "May",
      "Active user": 5600,
      "Total User": 8000,
    },
    {
      name: "Jun",
      "Active user": 6700,
      "Total User": 10000,
    },
    {
      name: "Jul",
      "Active user": 12430,
      "Total User": 15000,
    },
    {
      name: "Aug",
      "Active user": 14343,
      "Total User": 15430,
    },
    {
      name: "Sep",
      "Active user": 13490,
      "Total User": 17390,
    },
    {
      name: "Oct",
      "Active user": 15490,
      "Total User": 20000,
    },
    {
      name: "Nov",
      "Active user": 16490,
      "Total User": 23000,
    },
    {
      name: "Dec",
      "Active user": 18690,
      "Total User": 25000,
    },
  ];

  return (
    <div className="mainDashboard">
      <div className="mainDashboard__top">
        <FeaturedInfo title="Revanue" price={745} rate={3.5} />
        <FeaturedInfo title="Sale" price={542} rate={4.9} />
        <FeaturedInfo title="Cost" price={499} rate={-2.4} />
      </div>
      <div className="mainDashboard__bottom">
        <Chart title="Sales Analytics" data={data} grid />
      </div>
    </div>
  );
}

export default MainDashboard;

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Chart.scss";

function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1} height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {grid && (
            <CartesianGrid stroke="rgb(197, 234, 245)" strokeDasharray="3 4" />
          )}
          <XAxis dataKey="name" stroke="#8f6afc" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Active user"
            stroke="#8f6afc"
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="Total User"
            stroke="rgb(170, 93, 215)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", orders: 10 },
  { name: "Feb", orders: 7 },
  { name: "Mar", orders: 10 },
  { name: "Apr", orders: 20 },
  { name: "May", orders: 33, tooltip: "864 Orders" },
  { name: "Jun", orders: 30 },
  { name: "Jul", orders: 35 },
  { name: "Aug", orders: 48 },
  { name: "Sep", orders: 40 },
  { name: "Oct", orders: 24 },
  { name: "Nov", orders: 32 },
  { name: "Dec", orders: 28 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1f2533] text-white md:p-2 rounded-md shadow-lg text-sm">
        <p className="font-semibold">{payload[0].value} Orders</p>
        <p className="text-gray-300">{label}</p>
      </div>
    );
  }
  return null;
};

const SalesRevenueChart = () => {
  return (
    <div className="bg-[#0f1115] text-white md:p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <h3 className="mb-4 text-lg font-semibold">Sales Revenue</h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#3f3f3f" />
          <XAxis dataKey="name" stroke="#999" />
          <YAxis stroke="#999" domain={[0, 50]} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="orders"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 4, fill: "#3b82f6" }}
            activeDot={{
              r: 6,
              fill: "#fff",
              stroke: "#3b82f6",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesRevenueChart;

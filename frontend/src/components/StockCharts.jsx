// src/components/StockChart.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const StockChart = ({ chartData }) => {
  return (
    <div className="w-full h-64 md:h-96 bg-white p-4 rounded shadow">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" hide={false} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#4F46E5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;

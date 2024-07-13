import React from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const groupDurationByMonth = (workout) => {
  const grouped = {};

  workout.forEach((e) => {
    const monthYear = new Date(e.date).toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    if (!grouped[monthYear]) {
      grouped[monthYear] = 0;
    }
    grouped[monthYear] += parseFloat(e.duration);
  });

  return Object.entries(grouped)
    .map(([month, duration]) => ({ month, duration }))
    .sort((a, b) => new Date(a.month) - new Date(b.month)); // Sort by date
};

const Graph = () => {
  const workout = useSelector((state) => state?.workout?.workout);
  const data = groupDurationByMonth(workout);
  console.log(data);

  return (
    <ResponsiveContainer width="75%" height={300} className="mx-auto mt-5">
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <Bar dataKey="duration" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Graph;

import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", patients: 12 },
  { day: "Tue", patients: 18 },
  { day: "Wed", patients: 15 },
  { day: "Thu", patients: 22 },
  { day: "Fri", patients: 19 },
];

const Analytics = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
      <div className="bg-white shadow rounded-xl p-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#eee" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="patients" stroke="#16a34a" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;

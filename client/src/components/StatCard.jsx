import React from "react";

const StatCard = ({ title, value, change }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4">
      <p className="text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
      <span className="text-green-600 text-sm">{change}</span>
    </div>
  );
};

export default StatCard;

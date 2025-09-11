import React from "react";

const statusColors = {
  confirmed: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  completed: "bg-blue-100 text-blue-700",
};

const AppointmentCard = ({ name, time, type, status }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4 flex justify-between items-center">
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600">{type} at {time}</p>
      </div>
      <span className={`px-3 py-1 rounded text-sm font-medium ${statusColors[status]}`}>
        {status}
      </span>
    </div>
  );
};

export default AppointmentCard;

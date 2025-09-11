import React from "react";

const PatientCard = ({ name, age, condition, lastVisit }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-600">Age: {age}</p>
      <p className="text-gray-600">Condition: {condition}</p>
      <p className="text-gray-400 text-sm">Last Visit: {lastVisit}</p>
    </div>
  );
};

export default PatientCard;

import React from "react";
import PatientCard from "../components/PatientCard";

const Patients = () => {
  const patients = [
    { name: "Amit Sharma", age: 45, condition: "Diabetes", lastVisit: "2025-09-08" },
    { name: "Sneha Kulkarni", age: 32, condition: "Back Pain", lastVisit: "2025-09-09" },
    { name: "Rahul Verma", age: 29, condition: "Stress", lastVisit: "2025-09-07" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Patients</h2>
      <div className="grid grid-cols-3 gap-4">
        {patients.map((p, i) => (
          <PatientCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Patients;

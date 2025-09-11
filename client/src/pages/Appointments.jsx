import React from "react";
import AppointmentCard from "../components/AppointmentCard";

const Appointments = () => {
  const appointments = [
    { name: "Amit Sharma", time: "09:00 AM", type: "Consultation", status: "confirmed" },
    { name: "Sneha Kulkarni", time: "11:30 AM", type: "Therapy", status: "pending" },
    { name: "Rahul Verma", time: "01:00 PM", type: "Follow-up", status: "completed" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
      <div className="grid grid-cols-2 gap-4">
        {appointments.map((a, i) => (
          <AppointmentCard key={i} {...a} />
        ))}
      </div>
    </div>
  );
};

export default Appointments;

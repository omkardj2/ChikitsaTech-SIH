import React from "react";
import StatCard from "../components/StatCard";
import AppointmentCard from "../components/AppointmentCard";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Total Patients" value="1,247" change="+12%" />
        <StatCard title="Today's Appointments" value="23" change="+3" />
        <StatCard title="Pending Reviews" value="8" change="-2" />
        <StatCard title="Revenue This Month" value="$45,230" change="+18%" />
      </div>

      {/* Appointments */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Today's Appointments</h3>
        <div className="grid grid-cols-2 gap-4">
          <AppointmentCard name="John Doe" time="09:00" type="Consultation" status="confirmed" />
          <AppointmentCard name="Jane Smith" time="10:30" type="Follow-up" status="pending" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

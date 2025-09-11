import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Calendar, BarChart2, FileText, Settings } from "lucide-react";

const Sidebar = () => {
  const links = [
    { to: "/dashboard", label: "Overview", icon: <LayoutDashboard size={20} /> },
    { to: "/patients", label: "Patients", icon: <Users size={20} /> },
    { to: "/appointments", label: "Appointments", icon: <Calendar size={20} /> },
    { to: "/reports", label: "Reports", icon: <FileText size={20} /> },
    { to: "/analytics", label: "Analytics", icon: <BarChart2 size={20} /> },
    { to: "/settings", label: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="w-64 bg-white shadow-md flex flex-col">
      <div className="p-6 text-2xl font-bold text-green-800">ChikitsaTech</div>
      <nav className="flex-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 hover:bg-green-100 ${
                isActive ? "bg-green-200 text-green-900 font-medium" : "text-gray-600"
              }`
            }
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

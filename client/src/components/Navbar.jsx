import React from "react";
import { Bell } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-sm">
      <h2 className="text-lg font-semibold text-gray-700">Welcome back, Dr. Smith</h2>
      <div className="flex items-center gap-4">
        <Bell size={22} className="text-gray-600 cursor-pointer" />
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </header>
  );
};

export default Navbar;

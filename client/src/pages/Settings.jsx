import React from "react";

const Settings = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div className="bg-white shadow rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-gray-600 mb-1">Notification Preference</label>
          <select className="border rounded px-3 py-2 w-64">
            <option>Email</option>
            <option>SMS</option>
            <option>In-App</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Language</label>
          <select className="border rounded px-3 py-2 w-64">
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;

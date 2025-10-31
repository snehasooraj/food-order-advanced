import React, { useState } from "react";
import MenuManager from "./MenuManager";
import AccountManager from "./AccountManager";
import { Menu, X } from "lucide-react"; 

const Admin = () => {
  const [activeTab, setActiveTab] = useState("addProduct");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Mobile Header */}
      <div className="md:hidden bg-gray-800 text-white flex justify-between items-center p-4 mt-16">
        <h2 className="text-lg font-bold">Admin Panel</h2>
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:block md:w-64 bg-gray-800 text-white p-6 absolute md:static top-14 left-0 h-full md:h-auto z-20 transition-all`}
      >
        <h2 className="text-xl font-bold mb-6 hidden md:block">Admin Panel</h2>
        <ul className=" mt-19 space-y-10">
          <li
            className={`cursor-pointer ${
              activeTab === "addProduct" && "text-green-400 font-semibold"
            }`}
            onClick={() => {
              setActiveTab("addProduct");
              setMenuOpen(false);
            }}
          >
            Add Menu
          </li>
           <li
            className={`cursor-pointer ${
              activeTab === "userlist" && "text-green-400 font-semibold"
            }`}
            onClick={() => {
              setActiveTab("userlist");
              setMenuOpen(false);
            }}
          >
            User list
          </li>
          {/* You can add more menu items later */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 mt-14 md:mt-0 overflow-y-auto">
        {activeTab === "addProduct" && <MenuManager />}
        {activeTab === "userlist" && <AccountManager />}
      </div>
    </div>
  );
};

export default Admin;

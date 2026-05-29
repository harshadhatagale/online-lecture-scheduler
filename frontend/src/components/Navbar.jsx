import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="w-full h-16 bg-slate-800 text-white flex items-center justify-between px-6 shadow-md">
      
      
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <span className="text-2xl">📚</span>

        <h1 className="text-xl font-bold">
          Online Lecture Scheduler
        </h1>
      </div>

     
      <div className="flex items-center gap-4">
        
        {user && (
          <div className="hidden md:flex flex-col items-end">
            <span className="text-sm font-medium">
              {user.name}
            </span>

            <span className="text-xs text-slate-300">
              {user.role}
            </span>
          </div>
        )}

        {user && (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-medium transition duration-200"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
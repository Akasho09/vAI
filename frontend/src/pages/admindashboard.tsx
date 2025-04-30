import { useState } from "react";
import Topbar from "./dashboardComponents/Topbar";
import Feed from "./dashboardComponents/Feed";
import Profile from "./dashboardComponents/Profile";
import Earnings from "./dashboardComponents/Earnings";
import UserManagement from "./dashboardComponents/UserManagement"; 
import Analytics from "./dashboardComponents/Analytics";

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<"feed" | "profile" | "earnings" | "userManagement" | "analytics">("feed");
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for three-dot menu

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />;
      case "feed":
        return <Feed />;
      case "earnings":
        return <Earnings />;
      case "userManagement":
        return <UserManagement />;
      case "analytics":
        return <Analytics />;
      default:
        return <Feed />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Main content area */}
      <div className="flex-1 flex flex-col m-6  gap-4">
        <Topbar />
        <div className="relative flex-1 p-4 bg-white rounded-lg shadow-lg">
          {/* Tab Switcher Button (Three Dots) */}
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-6 h-1 bg-gray-700 mb-1 rounded-full"></span>
            <span className="block w-6 h-1 bg-gray-700 mb-1 rounded-full"></span>
            <span className="block w-6 h-1 bg-gray-700 rounded-full"></span>
          </div>

          {menuOpen && (
            <div className="absolute top-12 right-4 bg-white shadow-lg rounded-lg p-2 w-32 mb-4">
              <div
                className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded"
                onClick={() => { setActiveTab("feed"); setMenuOpen(false); }}
              >
                Feed
              </div>
              <div
                className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded"
                onClick={() => { setActiveTab("profile"); setMenuOpen(false); }}
              >
                Profile
              </div>
              <div
                className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded"
                onClick={() => { setActiveTab("earnings"); setMenuOpen(false); }}
              >
                Earnings
              </div>
              <div
                className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded"
                onClick={() => { setActiveTab("userManagement"); setMenuOpen(false); }}
              >
                User Management
              </div>
              <div
                className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded"
                onClick={() => { setActiveTab("analytics"); setMenuOpen(false); }}
              >
                Analytics
              </div>
            </div>
          )}

          {/* Render the active tab content */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

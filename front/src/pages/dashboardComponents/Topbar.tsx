import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface User {
  firstname?: string;
  lastname?: string;
  avatarUrl?: string;
  Credits?: number;
}

export default function Topbar() {
  const [user, setUser] = useState<User | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:3000/api/info/getme", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data.user);
    } catch (err) {
      console.error("Error fetching user", err);
      navigate("/signin");
    }
  };

  useEffect(() => {
    fetchUserDetails();

    const handleClickOutside = (event: MouseEvent) => {
      if (
        avatarRef.current &&
        !avatarRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const initials = `${user?.firstname?.[0] || ""}${user?.lastname?.[0] || ""}`.toUpperCase();

  const handleHistoryToggle = () => {
    setDropdownOpen(false);
    navigate("/credit-history"); // Navigate to the new Credit History page
  };

  return (
    <div className="flex items-center justify-between bg-white p-6 shadow-sm rounded-lg border border-gray-200">
      <div className="text-2xl font-semibold text-gray-800">
        Welcome, <span className="text-blue-600">{user?.firstname || "Creator"}</span>!
      </div>

      <div className="flex items-center gap-4 relative" ref={avatarRef}>
        <div className="text-gray-600 font-medium">
          Credits: <span className="text-green-600 font-bold">{user?.Credits || 0}</span>
        </div>

        {/* Avatar Button */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold text-lg focus:outline-none"
        >
          {user?.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt="Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            initials || "?"
          )}
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute top-14 right-0 bg-white shadow-lg rounded-md border w-48 z-50">
            <button
              onClick={() => {
                navigate("/complete-profile");
                setDropdownOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Complete Profile
            </button>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-50"
            >
              Logout
            </button>
            <button
              onClick={handleHistoryToggle}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              View Credit History
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
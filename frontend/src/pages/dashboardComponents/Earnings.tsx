import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  Credits: number;
}

export default function AdminUserCredits() {
  const [users, setUsers] = useState<User[]>([]);
  const [creditInputs, setCreditInputs] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const token = localStorage.getItem("token");

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get<{ users: User[] }>(`${backendUrl}/api/admin/users`, {
        headers: { Authorization: `${token}` },
      });
      setUsers(res.data.users);
      const initialCredits: { [key: string]: number } = {};
      res.data.users.forEach((u) => {
        initialCredits[u.id] = u.Credits;
      });
      setCreditInputs(initialCredits);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateCredits = async (id: string) => {
    const newCredits = creditInputs[id];
    try {
      await axios.put(
        `${backendUrl}/api/admin/user/${id}/credits`,
        { credits: newCredits },
        { headers: { Authorization: `${token}` } }
      );
      fetchUsers(); 
    } catch (err) {
      console.error("Failed to update credits:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">User Credit Management</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <table className="min-w-full border border-gray-300 shadow rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-100 text-gray-700">
              <th className="border p-3">Name</th>
              <th className="border p-3">Username</th>
              <th className="border p-3">Credits</th>
              <th className="border p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="text-center hover:bg-gray-50 transition">
                <td className="border p-3 font-medium">
                  {u.firstname} {u.lastname}
                </td>
                <td className="border p-3">{u.username}</td>
                <td className="border p-3">{u.Credits}</td>
                <td className="border p-3 flex justify-center gap-2">
                  <input
                    type="number"
                    min={0}
                    value={creditInputs[u.id] ?? u.Credits}
                    onChange={(e) =>
                      setCreditInputs((prev) => ({
                        ...prev,
                        [u.id]: parseInt(e.target.value),
                      }))
                    }
                    className="border px-3 py-1 w-24 rounded-md"
                  />
                  <button
                    onClick={() => updateCredits(u.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md text-sm"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

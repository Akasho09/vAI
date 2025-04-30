import { useEffect, useState } from "react";
import axios from "axios";

interface CreditHistoryEntry {
  reason: string;
  amount: number;
  createdAt: string;
}

export default function CreditHistoryPage() {
  const [creditHistory, setCreditHistory] = useState<CreditHistoryEntry[]>([]);
  const [totalCredits, setTotalCredits] = useState<number>(0);

  useEffect(() => {
    const fetchCreditHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3000/api/info/getcredithistory", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const historyFromDB: CreditHistoryEntry[] = res.data.creditHistory;

        setCreditHistory(historyFromDB);

        const total = historyFromDB.reduce((sum, entry) => sum + entry.amount, 0);
        setTotalCredits(total);
      } catch (err) {
        console.error("Error fetching credit history", err);
      }
    };

    fetchCreditHistory();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h3 className="text-3xl font-bold mb-2 text-gray-800">Credit History</h3>
      <p className="text-gray-600 mb-6">
        Total Earned: <span className="text-green-600 font-semibold">{totalCredits} Credits</span>
      </p>

      {creditHistory.length > 0 ? (
        <ul className="space-y-4">
          {creditHistory.map((entry, index) => (
            <li
              key={index}
              className={`flex flex-col sm:flex-row sm:justify-between items-start sm:items-center bg-white border shadow-sm rounded-lg p-4 ${
                entry.reason.toLowerCase().includes("signup") ? "border-blue-500 bg-blue-50" : "border-gray-200"
              }`}
            >
              <div className="text-gray-700 font-medium">
                {entry.reason}
                {entry.reason.toLowerCase().includes("signup") && (
                  <span className="ml-2 inline-block px-2 py-0.5 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                    Bonus
                  </span>
                )}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm mt-2 sm:mt-0">
                <span className="text-green-600 font-semibold">{entry.amount} Credits</span>
                <span className="text-gray-500">{new Date(entry.createdAt).toLocaleString()}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500 text-lg mt-6">No credit history available.</div>
      )}
    </div>
  );
}

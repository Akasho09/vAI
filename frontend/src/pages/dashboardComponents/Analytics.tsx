export default function Analytics() {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Analytics</h2>
        {/* Placeholder for charts or data */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold">Active Users</h3>
            <div className="h-32 bg-gray-200 rounded-lg">Chart/Graph here</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold">Earnings Overview</h3>
            <div className="h-32 bg-gray-200 rounded-lg">Chart/Graph here</div>
          </div>
        </div>
      </div>
    );
  };
  
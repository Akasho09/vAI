import Topbar from "./dashboardComponents/Topbar";
import Feed from "./dashboardComponents/Feed";

export const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Topbar />

      <div className="flex flex-col gap-6 p-6">
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Feed</h2>
          <Feed />
        </section>

      </div>
    </div>
  );
};

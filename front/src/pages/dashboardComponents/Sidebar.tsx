interface SidebarProps {
    setActiveTab: (tab: string) => void;
  }
  
  const Sidebar = ({ setActiveTab }: SidebarProps) => {
    return (
      <div className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Creator Panel</h2>
        <ul>
          <li onClick={() => setActiveTab("feed")} className="cursor-pointer mb-2">Feed</li>
          <li onClick={() => setActiveTab("profile")} className="cursor-pointer mb-2">Profile</li>
          <li onClick={() => setActiveTab("earnings")} className="cursor-pointer mb-2">Earnings</li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  
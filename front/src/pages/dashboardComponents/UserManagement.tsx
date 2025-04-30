export default function UserManagement (){
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">User Management</h2>
        {/* List of users and actions */}
        <div className="space-y-2">
          {/* Example of user list item */}
          <div className="flex justify-between items-center p-2 bg-gray-100 rounded-md">
            <div>Username1</div>
            <button className="text-red-500">Ban</button>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-100 rounded-md">
            <div>Username2</div>
            <button className="text-red-500">Ban</button>
          </div>
        </div>
      </div>
    );
  };
  
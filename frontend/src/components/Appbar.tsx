export const Appbar: React.FC = () => {
    return (
      <div className="shadow h-14 flex justify-between items-center px-4">
        {/* Left side: App name */}
        <div className="text-lg font-semibold">
          PayTM App
        </div>
  
        {/* Right side: User info */}
        <div className="flex items-center space-x-4">
          <div className="text-sm">
            Hello
          </div>
          <div className="rounded-full h-12 w-12 bg-slate-200 flex items-center justify-center text-xl font-medium">
            U
          </div>
        </div>
      </div>
    );
  };
  
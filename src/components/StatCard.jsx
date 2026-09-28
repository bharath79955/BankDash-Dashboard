const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <div className="flex items-center gap-4">
        
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          {icon}
        </div>

        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-1">
            {value}
          </h3>
        </div>

      </div>
    </div>
  );
};

export default StatCard;
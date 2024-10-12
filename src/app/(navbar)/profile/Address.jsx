export const Address = ({ address, user }) => {
  return (
    <div className="flex flex-col gap-4 border border-gray-900 p-4 rounded-xl">
      <h1 className="text-lg font-medium">Other Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="font-medium mb-1">Continent</p>
          <p className="text-gray-700">{address?.continent}</p>
        </div>
        <div>
          <p className="font-medium mb-1">Country</p>
          <p className="text-gray-700">{address?.country}</p>
        </div>
        <div>
          <p className="font-medium mb-1">Current IP</p>
          <p className="text-gray-700">{address?.ip}</p>
        </div>
        <div>
          <p className="font-medium mb-1">User Since</p>
          <p>
            {Math.round(
              (Date.now() - new Date(user?.$createdAt)) / (1000 * 60 * 60 * 24)
            )}{" "}
            days
          </p>
        </div>
      </div>
    </div>
  );
};

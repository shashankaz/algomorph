export const ProfileInformation = ({ firstName, lastName, email, phone }) => {
  return (
    <div className="flex flex-col gap-4 border border-gray-900 p-4 rounded-xl">
      <h1 className="text-lg font-medium">Personal Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="font-medium mb-1">First Name</p>
          <p className="text-gray-700">{firstName}</p>
        </div>
        <div>
          <p className="font-medium mb-1">Last Name</p>
          <p className="text-gray-700">{lastName}</p>
        </div>
        <div>
          <p className="font-medium mb-1">Email address</p>
          <p className="text-gray-700">{email}</p>
        </div>
        <div>
          <p className="font-medium mb-1">Phone Number</p>
          <p className="text-gray-700">{phone || "Unavailable"}</p>
        </div>
      </div>
    </div>
  );
};

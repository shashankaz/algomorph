export const Sidebar = ({ tab, setTab }) => {
  return (
    <div className="flex flex-col w-full md:w-60 gap-4">
      <div
        className={`p-4 rounded-xl cursor-pointer ${
          tab === "profile" ? "bg-gray-900 text-white" : ""
        } border border-gray-900`}
        onClick={() => setTab("profile")}
      >
        Profile Information
      </div>
      <div
        className={`p-4 rounded-xl cursor-pointer ${
          tab === "saved" ? "bg-gray-900 text-white" : ""
        } border border-gray-900`}
        onClick={() => setTab("saved")}
      >
        Saved Algorithms
      </div>
      <div
        className={`p-4 rounded-xl cursor-pointer ${
          tab === "settings" ? "bg-gray-900 text-white" : ""
        } border border-gray-900`}
        onClick={() => setTab("settings")}
      >
        Settings
      </div>
    </div>
  );
};

import { account } from "@/app/appwrite";

const Logout = () => {
  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
      router.push("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center md:hidden border border-gray-900 bg-gradient-to-b from-gray-700 hover:from-gray-600 to-gray-900 hover:to-gray-900 text-white py-2 px-4 rounded-lg">
      <button onClick={logout}>Sign out</button>
    </div>
  );
};

export default Logout;

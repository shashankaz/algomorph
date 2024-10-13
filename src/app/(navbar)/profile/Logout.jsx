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
    <div className="flex md:hidden flex-col gap-4 border border-gray-900 bg-gray-900 text-white p-4 rounded-xl">
      <button onClick={logout}>Sign out</button>
    </div>
  );
};

export default Logout;

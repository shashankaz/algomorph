"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { account, ID } from "@/app/appwrite";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const register = async (e) => {
    e.preventDefault();
    
    const name = `${firstName} ${lastName}`;

    try {
      await account.create(ID.unique(), email, password, name);
      await login(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const login = async (email, password) => {
    try {
      await account.createEmailPasswordSession(email, password);
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await account.createOAuth2Session("google", `${window.location.origin}`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center font-cinzel">Sign Up</h1>
        <p className="text-sm font-light text-center mt-3">
          Already have an account?{" "}
          <Link href={"/sign-in"} className="font-medium text-blue-600">
            Sign in
          </Link>
        </p>
        <form onSubmit={register} className="flex flex-col gap-4 mt-6">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="First name*"
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last name*"
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password*"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </p>
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="h-5 w-5" />
              <p className="text-sm ml-2">
                I agree to the{" "}
                <Link
                  href={"/terms-of-service"}
                  className="underline text-blue-600"
                >
                  Terms of Service
                </Link>
              </p>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              className="w-full py-2 px-4 mt-4 bg-green-600 hover:bg-green-700 text-white transition duration-200 font-semibold rounded-md"
              type="submit"
            >
              Create account
            </button>
          </div>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <p className="mx-2 text-center text-xs">Or register with</p>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <button
          onClick={loginWithGoogle}
          className="w-full rounded-md border border-gray-500 hover:bg-gray-500 hover:text-white transition duration-200 py-2 flex items-center justify-center gap-2 text-base"
        >
          <FaGoogle />
          Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;

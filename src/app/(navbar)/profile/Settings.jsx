"use client";

import { useState } from "react";
import { account } from "@/app/appwrite";

export const Settings = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [successPassword, setSuccessPassword] = useState("");
  const [successPhone, setSuccessPhone] = useState("");
  const [errorPassowrd, setErrorPassword] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    try {
      await account.updatePassword(confirmPassword, password);
      setPassword("");
      setConfirmPassword("");
      setSuccessPassword("Password updated successfully");
    } catch (err) {
      setErrorPassword(err.message);
    }
  };

  const handlePhoneUpdate = async (e) => {
    e.preventDefault();
    try {
      await account.updatePhone(phone, password);
      setPhone("");
      setPassword("");
      setSuccessPhone("Phone number updated successfully");
    } catch (err) {
      setErrorPhone(err.message);
    }
  };

  return (
    <div className="border border-gray-900 p-4 rounded-xl">
      <h1 className="text-lg font-medium">Settings</h1>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-medium">Change Password</h2>
          <input
            type="password"
            placeholder="Current Password"
            className="border border-gray-300 rounded-md p-2 focus:outline-none mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            className="border border-gray-300 rounded-md p-2 focus:outline-none mt-1"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {successPassword && (
            <p className="text-sm text-green-600">{successPassword}</p>
          )}
          {errorPassowrd && (
            <p className="text-sm text-red-600">{errorPassowrd}</p>
          )}
          <button
            onClick={handlePasswordUpdate}
            className="mt-2 bg-gradient-to-b from-gray-700 hover:from-gray-600 to-gray-900 hover:to-gray-900 text-white py-2 px-4 w-full md:w-40 rounded-lg"
          >
            Update Password
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-medium">Update Phone</h2>
          <input
            type="text"
            placeholder="Enter Phone Number with Country Code"
            className="border border-gray-300 rounded-md p-2 focus:outline-none mt-1"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Current Password"
            className="border border-gray-300 rounded-md p-2 focus:outline-none mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {successPhone && (
            <p className="text-sm text-green-600">{successPhone}</p>
          )}
          {errorPhone && <p className="text-sm text-red-600">{errorPhone}</p>}
          <button
            onClick={handlePhoneUpdate}
            className="mt-2 bg-gradient-to-b from-gray-700 hover:from-gray-600 to-gray-900 hover:to-gray-900 text-white py-2 px-4 w-full md:w-40 rounded-lg"
          >
            Update Phone
          </button>
        </div>
      </div>
    </div>
  );
};

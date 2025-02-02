"use client";

import { useEffect, useState } from "react";
import { account } from "@/app/appwrite";
import toast, { Toaster } from "react-hot-toast";

export const Settings = ({ user, handleFileChange, handleImgUpload, img }) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSetPassword = async (e) => {
    e.preventDefault();
    try {
      await account.updatePassword(newPassword);
      toast.success("Password set successfully");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    try {
      await account.updatePassword(confirmPassword, password);
      toast.success("Password updated successfully");
      setPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handlePhoneUpdate = async (e) => {
    e.preventDefault();
    try {
      await account.updatePhone(phone, password);
      toast.success("Phone number updated successfully");
      setPhone("");
      setPassword("");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="border border-gray-900 p-4 rounded-xl">
      <Toaster position="top-center" reverseOrder={true} />
      <h1 className="text-lg font-medium">Settings</h1>
      {user?.passwordUpdate ? (
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
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="border border-gray-300 rounded-md p-2 focus:outline-none mt-1"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              onClick={handlePasswordUpdate}
              className="mt-2 bg-gradient-to-b from-gray-700 hover:from-gray-600 to-gray-900 hover:to-gray-900 text-white py-2 px-4 w-full md:w-48 rounded-lg"
            >
              Update Password
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-medium">Set Password</h2>
            <input
              type="password"
              placeholder="New Password"
              className="border border-gray-300 rounded-md p-2 focus:outline-none mt-1"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="border border-gray-300 rounded-md p-2 focus:outline-none mt-1"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              onClick={handleSetPassword}
              className="mt-2 bg-gradient-to-b from-gray-700 hover:from-gray-600 to-gray-900 hover:to-gray-900 text-white py-2 px-4 w-full md:w-48 rounded-lg"
            >
              Set Password
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-medium">Update Avatar</h2>
          <input
            type="file"
            name="img"
            id="img"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="img"
            className="cursor-pointer border border-gray-300 rounded-md flex justify-center p-2 w-fit mt-1 font-semibold text-gray-500"
          >
            Select Image
          </label>
          <button
            onClick={handleImgUpload}
            className="mt-2 bg-gradient-to-b from-gray-700 hover:from-gray-600 to-gray-900 hover:to-gray-900 text-white py-2 px-4 w-full md:w-48 rounded-lg"
            disabled={!img}
          >
            Upload Image
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
          <button
            onClick={handlePhoneUpdate}
            className="mt-2 bg-gradient-to-b from-gray-700 hover:from-gray-600 to-gray-900 hover:to-gray-900 text-white py-2 px-4 w-full md:w-48 rounded-lg"
          >
            Update Phone
          </button>
        </div>
      </div>
    </div>
  );
};

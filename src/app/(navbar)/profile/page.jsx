"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { account, locale, storage, ID, databases } from "@/app/appwrite";
import { Sidebar } from "./Sidebar";
import { ProfileInformation } from "./ProfileInformation";
import { Address } from "./Address";
import { Logs } from "./Logs";
import { Saved } from "./Saved";
import { Settings } from "./Settings";
import Logout from "./Logout";
import ProtectedRoute from "@/components/ProtectedRoute";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState(null);
  const [img, setImg] = useState(null);
  const [log, setLog] = useState(null);
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState("profile");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const user = await account.get();
        if (user) {
          setFirstName(user.name.split(" ")[0]);
          setLastName(user.name.split(" ")[1] || "");
          setEmail(user.email);
          setPhone(user.phone);
          setUser(user);
        }
      } catch (err) {
        console.error(err.message);
      }
    };

    const fetchDetails = async () => {
      try {
        const data = await locale.get();
        setAddress(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    const fetchLogs = async () => {
      try {
        const data = await account.listLogs();
        setLog(data.logs);
      } catch (err) {
        console.error(err.message);
      }
    };

    const fetchAvatar = async () => {
      try {
        const data = await databases.listDocuments(
          process.env.NEXT_PUBLIC_DATABASE_ID,
          process.env.NEXT_PUBLIC_COLLECTION_ID_2
        );

        const user = await account.get();

        const image = data.documents.find((doc) => doc.userId === user?.$id);

        // setImg(
        //   `https://cloud.appwrite.io/v1/storage/buckets/${process.env.NEXT_PUBLIC_BUCKET_ID}/files/${image.imgId}/preview`
        // );
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchUserDetails();
    fetchDetails();
    fetchLogs();
    fetchAvatar();
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImg(selectedFile);
    }
  };

  const handleImgUpload = async () => {
    if (!img) {
      console.error("No file selected");
      return;
    }

    try {
      const image = await storage.createFile(
        process.env.NEXT_PUBLIC_BUCKET_ID,
        ID.unique(),
        img
      );

      await databases.createDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_2,
        ID.unique(),
        {
          imgId: image.$id,
          userId: user.$id,
        }
      );
    } catch (err) {
      console.error("Error uploading image:", err.message);
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex flex-col md:flex-row gap-4 px-4 sm:px-8 md:px-16 lg:px-32 pt-24 pb-10">
        <Sidebar tab={tab} setTab={setTab} />
        <div className="w-full flex flex-col gap-4">
          {tab === "profile" && (
            <>
              <div className="flex justify-between items-center border border-black p-4 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full">
                    <Image
                      src="/user.png"
                      alt="avatar"
                      height={1000}
                      width={1000}
                      draggable="false"
                    />
                  </div>
                  <div className="flex flex-col justify-evenly">
                    <p className="text-lg font-medium">{`${firstName} ${lastName}`}</p>
                    <p className="capitalize text-gray-700">
                      {user?.labels.length == 0 ? "User" : user?.labels[0]}
                    </p>
                  </div>
                </div>
              </div>
              <ProfileInformation
                firstName={firstName}
                lastName={lastName}
                email={email}
                phone={phone}
              />
              <Address address={address} user={user} />
              <Logs log={log} />
              <Logout />
            </>
          )}

          {tab === "saved" && <Saved />}

          {tab === "settings" && (
            <Settings
              user={user}
              handleFileChange={handleFileChange}
              handleImgUpload={handleImgUpload}
              img={img}
            />
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Profile;

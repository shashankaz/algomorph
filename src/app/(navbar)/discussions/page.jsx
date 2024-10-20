"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { account, databases } from "@/app/appwrite";
import ProtectedRoute from "@/components/ProtectedRoute";
import Model from "./Model";

const Discussions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [discussions, setDiscussions] = useState([]);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const res = await fetch("/api/discussion");
        const data = await res.json();
        const fetchedDiscussions = data?.data.reverse() || [];

        const images = await databases.listDocuments(
          process.env.NEXT_PUBLIC_DATABASE_ID,
          process.env.NEXT_PUBLIC_COLLECTION_ID_2
        );

        const updatedDiscussions = fetchedDiscussions.map((discussion) => {
          const image = images.documents
            .reverse()
            .find((doc) => doc.userId === discussion.userId);

          return {
            ...discussion,
            img: image
              ? `https://cloud.appwrite.io/v1/storage/buckets/${process.env.NEXT_PUBLIC_BUCKET_ID}/files/${image.imgId}/view?project=${process.env.NEXT_PUBLIC_PROJECT_ID}`
              : "/user.png",
          };
        });

        setDiscussions(updatedDiscussions);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchUser = async () => {
      try {
        const user = await account.get();
        setSession(user);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchDiscussions();
    fetchUser();
  }, []);

  return (
    <ProtectedRoute>
      <div className="h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-20">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-semibold mb-4">Discussions</h2>
          <button
            onClick={() => setIsOpen(true)}
            className="flex gap-2 items-center border border-black hover:bg-black hover:text-white transition duration-200 px-3 h-10 rounded-lg text-sm"
          >
            <CiCirclePlus />
            New Discussion
          </button>
        </div>
        <div className="flex flex-col gap-4 py-10">
          {loading ? (
            <div className="flex justify-center items-center mt-20">
              <h1 className="text-xl">Loading discussions...</h1>
            </div>
          ) : discussions.length > 0 ? (
            discussions.map((discussion) => (
              <Link key={discussion.id} href={`/discussions/${discussion.id}`}>
                <div className="flex gap-3 items-center p-3 cursor-pointer border border-black rounded-lg">
                  <div className="h-12 w-12 rounded-full">
                    <Image
                      src={discussion.img}
                      alt="avatar"
                      height={1000}
                      width={1000}
                      draggable="false"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center flex-1">
                    <div className="flex flex-col w-full">
                      <h1 className="font-semibold line-clamp-1">
                        {discussion.title}
                      </h1>
                      <p className="text-sm">
                        {discussion.name} created{" "}
                        {formatDistanceToNow(new Date(discussion.createdAt))}{" "}
                        ago
                      </p>
                    </div>
                    <div className="flex gap-2 items-center text-sm justify-start md:justify-end md:w-36">
                      <FaRegComment />
                      <span>{discussion.postCount} Comment</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="flex justify-center items-center mt-20">
              <h1 className="text-xl">No discussions yet</h1>
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <Model
          setIsOpen={setIsOpen}
          name={session?.name}
          userId={session?.$id}
        />
      )}
    </ProtectedRoute>
  );
};

export default Discussions;

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Model = ({ setIsOpen, name, userId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/discussion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          userId: userId,
          title,
          description,
        }),
      });

      if (response.ok) {
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="py-5 h-[calc(100vh-4rem)] absolute top-16 w-full backdrop-blur-lg">
      <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold mb-3 font-cinzel">Start a Discussion</h1>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="bg-black text-white p-2 rounded-lg"
          >
            <RxCross1 />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-lg font-medium">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter a title"
              className="p-2 rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-lg font-medium">
              Description
            </label>
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="Enter a description"
              className="p-2 rounded-lg"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button
            className="px-4 py-2 mt-5 mb-10 w-fit rounded-lg bg-black hover:bg-black/80 text-white"
            type="submit"
          >
            Create discussion
          </button>
        </form>
      </div>
    </div>
  );
};

export default Model;

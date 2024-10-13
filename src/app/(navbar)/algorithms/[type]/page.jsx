"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Editor from "@monaco-editor/react";
import { IoCopyOutline } from "react-icons/io5";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { CiPlay1 } from "react-icons/ci";
import { languages } from "@/app/languages";
import algorithms from "@/data/algorithms";
import toast, { Toaster } from "react-hot-toast";

const Page = ({ params }) => {
  const [tab, setTab] = useState("c++");
  const [like, setLike] = useState(false);
  const [algorithm, setAlgorithm] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(`/api/algorithms/${params.type}`);
      const data = await response.json();

      setAlgorithm(data);
    };

    fetchdata();
  }, [params.type]);

  const data = algorithms.find(
    (algorithm) => algorithm.link === `/algorithms/${params.type}`
  );

  const getCodeForLanguage = (language) => {
    if (!algorithm) return "";

    switch (language.toLowerCase()) {
      case "c++":
        return algorithm["cpp"];
      case "c":
        return algorithm["c"];
      case "java":
        return algorithm["java"];
      case "python":
        return algorithm["python"];
      case "javascript":
        return algorithm["javascript"];
      default:
        return "";
    }
  };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  const handleLike = () => {
    setLike(!like);
    toast("Saved!", {
      icon: "❤️",
    });
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-24 flex flex-col gap-8">
      <Toaster position="top-center" reverseOrder={true} />
      <div>
        <h1 className="text-3xl font-semibold">{data.name}</h1>
        <p className="text-lg mt-4">{algorithm?.description}</p>
      </div>
      <div>
        <div className="flex flex-wrap gap-4 py-2 font-semibold">
          {languages.map((language, index) => (
            <button key={index} onClick={() => setTab(language.toLowerCase())}>
              <div
                className={`${
                  tab === language.toLowerCase()
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-black"
                } text-sm px-3 py-1 rounded-full shadow-md`}
              >
                {language}
              </div>
            </button>
          ))}
        </div>

        <div className="border border-black bg-gray-50 h-[600px] p-4 mt-2 flex flex-col md:flex-row gap-2 md:gap-4">
          <div className="flex flex-row md:flex-col gap-4 mb-4 md:mb-0">
            <button
              className="p-2 bg-slate-200 rounded-full shadow-md"
              onClick={() => copyCode(getCodeForLanguage(tab))}
            >
              <IoCopyOutline />
            </button>
            <Link href={`/playground/${algorithm?.algorithm}`}>
              <button className="p-2 bg-slate-200 rounded-full shadow-md">
                <CiPlay1 />
              </button>
            </Link>
            <button
              className="p-2 bg-slate-200 rounded-full shadow-md"
              onClick={handleLike}
            >
              {like ? <AiFillLike /> : <AiOutlineLike />}
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            <Editor
              theme="vs-dark"
              height="100%"
              width="100%"
              language={tab}
              value={getCodeForLanguage(tab)}
              options={{
                readOnly: true,
              }}
            />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-semibold">Time and Space Complexity</h1>
        <ul className="mt-4 list-inside list-disc">
          <li>
            <span className="font-semibold">Best Case Time Complexity:</span>{" "}
            {data.best_case_time_complexity}
          </li>
          <li>
            <span className="font-semibold">Average Case Time Complexity:</span>{" "}
            {data.average_case_time_complexity}
          </li>
          <li>
            <span className="font-semibold">Worst Case Time Complexity:</span>{" "}
            {data.worst_case_time_complexity}
          </li>
          <li>
            <span className="font-semibold">Space Complexity:</span>{" "}
            {data.space_complexity}
          </li>
        </ul>
      </div>

      {data.visualization && (
        <div>
          <h1 className="text-2xl font-semibold">Visualization</h1>
          <div className="mt-4">
            <Link
              href={`/visualize/${algorithm?.algorithm}`}
              className="font-semibold"
            >
              Click here
            </Link>{" "}
            to visualize the {data.name} algorithm.
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

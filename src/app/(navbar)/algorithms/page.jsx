"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import algorithms from "@/data/algorithms";

const filter = [
  "All",
  "Sorting",
  "Searching",
  "Dynamic Programming",
  "Graph",
  "String",
];

const Algorithms = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 9;

  const filteredAlgorithms = algorithms
    .filter((algorithm) =>
      algorithm.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(
      (algorithm) => category === "All" || algorithm.category === category
    );

  const totalPages = Math.ceil(filteredAlgorithms.length / itemsPerPage);

  const displayedAlgorithms = filteredAlgorithms.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col relative min-h-screen">
      <div className="absolute top-1/3 w-full">
        <h1 className="text-4xl font-semibold text-center">Algorithms</h1>
        <div className="flex justify-center items-center mt-10 mx-4 max-w-2xl md:mx-auto bg-white shadow-md rounded-3xl">
          <div className="px-4">
            <CiSearch />
          </div>
          <input
            type="text"
            placeholder="Search any algorithm"
            className="w-full py-2 rounded-r-3xl outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className={`p-2 mr-1 ${
              search ? "bg-gray-800" : "bg-gray-500"
            } rounded-full`}
            disabled={!search}
          >
            <MdKeyboardArrowRight color="white" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-3 mt-10 flex-wrap">
          {filter.map((category) => (
            <button
              key={category}
              className={`px-4 py-1 text-sm font-semibold rounded-full ${
                search === category ? "bg-gray-700 text-white" : "bg-gray-200"
              } shadow-md`}
              onClick={() => setCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 md:px-16 lg:px-32 py-20">
          {displayedAlgorithms.map((algorithm) => (
            <div
              key={algorithm.id}
              className="flex flex-col gap-2 bg-white h-44 p-4 rounded-xl shadow-md"
            >
              <h2 className="text-lg pb-1 font-semibold line-clamp-1">
                {algorithm.name}
              </h2>
              <div className="flex flex-col justify-between h-full">
                <p className="text-gray-500 line-clamp-3">
                  {algorithm.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    {algorithm.category}
                  </span>
                  <a
                    href={algorithm.link}
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center gap-2 pb-20">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`py-1 px-3 border border-black rounded-full ${
                currentPage === index + 1 ? "bg-gray-800 text-white" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Algorithms;

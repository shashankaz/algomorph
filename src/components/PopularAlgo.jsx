const featuredAlgorithms = [
  {
    id: 1,
    name: "Quick Sort",
    category: "Sorting",
    description:
      "An efficient sorting algorithm using a divide-and-conquer approach with an average time complexity of O(n log n).",
    link: "/algorithms/quick-sort",
  },
  {
    id: 2,
    name: "Dijkstra's Algorithm",
    category: "Graph Algorithms",
    description:
      "Finds the shortest paths from a source node in a weighted graph using a priority queue.",
    link: "/algorithms/dijkstras-algorithm",
  },
  {
    id: 3,
    name: "Merge Sort",
    category: "Sorting",
    description:
      "A stable sorting algorithm that divides and merges arrays with a time complexity of O(n log n).",
    link: "/algorithms/merge-sort",
  },
  {
    id: 4,
    name: "Breadth-First Search (BFS)",
    category: "Graph Algorithms",
    description:
      "Traverses graphs level by level, useful for finding the shortest path in unweighted graphs.",
    link: "/algorithms/breadth-first-search",
  },
  {
    id: 5,
    name: "Knapsack Problem",
    category: "Dynamic Programming",
    description:
      "Maximizes the total value of items in a knapsack with weight limits using dynamic programming.",
    link: "/algorithms/knapsack",
  },
  {
    id: 6,
    name: "Binary Search",
    category: "Searching",
    description:
      "Efficiently finds an item in a sorted list by repeatedly halving the search interval.",
    link: "/algorithms/binary-search",
  },
];

const PopularAlgo = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-16 px-4 sm:px-8 md:px-16 lg:px-32 py-10">
      <h1 className="text-3xl font-semibold text-center">Popular Algorithms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredAlgorithms.map((algo) => (
          <div key={algo.id} className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold line-clamp-1">
              {algo.name}
            </h2>
            <p className="text-gray-500 mt-2 line-clamp-2 text-sm sm:text-base">
              {algo.description}
            </p>
            <div className="flex justify-between items-center mt-6">
              <span className="text-sm text-gray-400">{algo.category}</span>
              <a
                href={algo.link}
                className="text-sm text-blue-500 hover:underline"
              >
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularAlgo;

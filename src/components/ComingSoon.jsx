import Link from "next/link";

const list = [
  "Algorithm visualizer",
  "Live code editor",
  "More languages",
  "Time and space complexity analysis",
  "Save algorithms",
];

const ComingSoon = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-10">
      <div className="flex flex-col justify-center items-center gap-8 md:gap-16">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center font-cinzel">
          Coming Soon
        </h1>
        <ul className="flex flex-wrap justify-center gap-4 max-w-4xl">
          {list.map((item, index) => (
            <li
              key={index}
              className="px-6 py-2 rounded-full font-semibold capitalize bg-gray-300 hover:bg-gray-100 shadow-xl cursor-pointer transition duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
        <h2>
          Have any suggestions?{" "}
          <Link href={"/suggestions"} className="font-medium">
            Submit here
          </Link>{" "}
        </h2>
      </div>
    </div>
  );
};

export default ComingSoon;

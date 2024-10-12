import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 h-screen max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center">
        Master{" "}
        <span className="bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 animate-gradient bg-300% text-transparent bg-clip-text">
          Data Structures
        </span>{" "}
        and{" "}
        <span className="bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 animate-gradient bg-300% text-transparent bg-clip-text">
          Algorithms
        </span>{" "}
        Across Languages
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-center">
        Explore, visualize, and test algorithms in your favorite languages.
      </p>
      <Link href="/algorithms">
        <button className="text-base md:text-lg px-6 py-2 rounded-lg bg-gradient-to-b from-green-600 hover:from-green-500 to-green-800 hover:to-green-800 text-white shadow-md">
          Explore Algorithms
        </button>
      </Link>
    </div>
  );
};

export default Hero;

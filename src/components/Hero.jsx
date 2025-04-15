import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_25%,rgba(68,68,68,.1)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.1)_75%)] bg-[length:20px_20px] opacity-30"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Master{" "}
              <span className="bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 animate-gradient bg-300% text-transparent bg-clip-text">
                Data Structures
              </span>{" "}
              <span className="hidden sm:inline">and</span>
              <span className="block sm:inline">
                {" "}
                <span className="bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 animate-gradient bg-300% text-transparent bg-clip-text">
                  Algorithms
                </span>
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Interactive platform to learn, practice, and visualize algorithms
              across multiple programming languages. Perfect for interviews and
              competitive programming.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="/algorithms"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 text-center"
              >
                Explore Algorithms
              </Link>
              <Link
                href="/playground"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-black rounded-full font-medium hover:bg-black hover:text-white transition-colors duration-200 text-center"
              >
                Try Playground
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 rounded-3xl animate-gradient bg-300% blur-xl opacity-30"></div>

              <div className="relative bg-white rounded-3xl shadow-xl p-3 sm:p-4">
                <div className="bg-gray-50 rounded-2xl p-3 sm:p-4">
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  <pre className="font-mono text-xs sm:text-sm overflow-x-auto">
                    <code className="text-gray-800">
                      {`function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[0];
  const left = [];
  const right = [];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

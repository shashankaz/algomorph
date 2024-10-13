import Image from "next/image";

const keyFeatures = [
  {
    title: "Multi-Language Support",
    description:
      "Run and test data structures and algorithms in multiple programming languages, including Python, Java, C++, JavaScript, and more.",
    icon: "language-support-icon.svg",
  },
  {
    title: "Interactive Code Playground",
    description:
      "Write, run, and modify algorithms directly in the browser with our code editor, and see real-time outputs for multiple languages.",
    icon: "code-playground-icon.svg",
  },
  {
    title: "Algorithm Visualizations",
    description:
      "Visualize how algorithms work step-by-step with dynamic graphical representations, making complex concepts easier to understand.",
    icon: "visualization-icon.svg",
  },
  {
    title: "Comprehensive API",
    description:
      "Access algorithms programmatically via our API, allowing you to fetch algorithm implementations and run them with custom inputs.",
    icon: "api-icon.svg",
  },
];

const Features = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-10">
      <div className="flex flex-col gap-4 sm:gap-8 md:gap-16 bg-gradient-to-b from-gray-200 to-gray-100 rounded-xl p-4 sm:p-8 md:p-16">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center">
          Key Features
        </h1>
        <div className="flex flex-col sm:flex-row justify-between">
          <ul className="w-full sm:w-1/2">
            {keyFeatures.map((feature, index) => (
              <li key={index} className="flex flex-col gap-3 mb-4">
                <h2 className="font-semibold text-lg sm:text-xl">
                  {feature.title}
                </h2>
                <p className="text-sm sm:text-base">{feature.description}</p>
              </li>
            ))}
          </ul>
          <div className="w-full sm:w-1/2 grid place-content-center mt-4 sm:mt-0 pl-0 sm:pl-8 md:pl-16">
            <div className="h-64 sm:h-80 w-full sm:w-80 hidden md:block">
              <Image
                src="/features.png"
                width={500}
                height={500}
                alt="Features"
                className="h-full w-full object-cover filter drop-shadow-lg"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

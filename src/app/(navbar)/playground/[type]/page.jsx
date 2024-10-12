"use client";

import { useState, useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import { Language_versions } from "@/app/(navbar)/playground/language_versions";

const languages = ["Java", "Python", "JavaScript"];

const Playground = ({ params }) => {
  const { type } = params;

  const [output, setOutput] = useState(
    "Click the run code button to execute the code."
  );
  const [algorithm, setAlgorithm] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState(null);

  const executeCode = async (language, sourceCode) => {
    const response = await fetch("/api/algorithms/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: language,
        version: Language_versions[language],
        code: [{ content: sourceCode }],
      }),
    });

    return response.json();
  };

  const handleExecute = async () => {
    setIsRunning(true);
    setOutput("");
    setError(null);
    try {
      const result = await executeCode(
        selectedLanguage.toLowerCase(),
        getCodeForLanguage(selectedLanguage.toLowerCase())
      );
      setOutput(result.run.output || "No output");
    } catch (error) {
      setError(`Execution error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(`/api/algorithms/${params.type}`);
      const data = await response.json();

      setAlgorithm(data);
    };

    fetchdata();
  }, [params.type]);

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

  return (
    <div className="h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-20">
      <h2 className="text-4xl font-semibold mb-4 capitalize">
        {type.split("-").join(" ")}
      </h2>
      <div className="flex flex-col md:flex-row gap-4 pb-12 h-full">
        <div className="w-full md:w-1/2 h-full">
          <div className="flex gap-2 items-center mb-4">
            <label className="font-medium">Select Language:</label>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="p-2 border rounded"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          <Editor
            theme="vs-dark"
            height="100%"
            width="100%"
            language={selectedLanguage.toLowerCase()}
            value={getCodeForLanguage(selectedLanguage.toLowerCase())}
            options={{
              readOnly: true,
            }}
          />
        </div>

        <div className="w-full md:w-1/2 h-full">
          <button
            onClick={handleExecute}
            disabled={isRunning}
            className={`mb-4 p-2 bg-gray-800 text-white rounded-md w-full ${
              isRunning ? "opacity-50" : ""
            }`}
          >
            {isRunning ? "Running..." : "Run Code"}
          </button>

          <pre
            className={`border border-black ${
              error && "border-red-500 text-red-500"
            } p-2 h-full overflow-auto`}
          >
            {error ? error : output}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Playground;

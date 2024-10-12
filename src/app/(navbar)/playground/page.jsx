"use client";

import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { FaPlay, FaPause } from "react-icons/fa";
import { Language_versions } from "./language_versions";

const languages = ["Java", "Python", "JavaScript"];

const CodeEditorPlayground = () => {
  const [output, setOutput] = useState(
    "Write your code and click the run button."
  );
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  const [sourceCode, setSourceCode] = useState("");
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
        sourceCode
      );

      setOutput(result.run?.output || "No output");
    } catch (error) {
      setError(`Execution error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-20">
      <h2 className="text-4xl font-semibold mb-4">Playground</h2>
      <div className="flex flex-col pb-12 h-full">
        <div className="flex gap-2 items-center mb-4">
          <label className="font-medium">Select Language:</label>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="p-2 border border-gray-400 rounded"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
          <button
            onClick={handleExecute}
            disabled={isRunning}
            className="bg-white w-28 px-3 py-2 rounded border border-gray-400 flex items-center justify-center"
          >
            {isRunning ? <div>Running...</div> : <div>Run Code</div>}
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full h-full">
          <div className="w-full md:w-1/2 h-full">
            <Editor
              theme="vs-dark"
              height="100%"
              width="100%"
              language={selectedLanguage.toLowerCase()}
              value={sourceCode}
              onChange={(value) => setSourceCode(value || "")}
              options={{
                selectOnLineNumbers: true,
              }}
            />
          </div>

          <div className="w-full md:w-1/2 h-full">
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
    </div>
  );
};

export default CodeEditorPlayground;

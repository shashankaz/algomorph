const ApiEndpoints = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6 font-cinzel">API Endpoints</h1>

      <div className="flex flex-col gap-10">
        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold font-cinzel">
            1. Explore Algorithm Implementations (GET)
          </h2>

          <p>Fetch all the available algorithms.</p>
          <div className="bg-gray-200 p-4 rounded-md">
            <code className="block text-sm">GET /api/algorithms</code>
          </div>

          <p>Fetch details of a specific algorithm.</p>
          <div className="bg-gray-200 p-4 rounded-md">
            <code className="block text-sm">
              GET /api/algorithms/{`{algorithm}`}
            </code>
          </div>

          <p>Fetch details of a specific algorithm in a given language.</p>
          <div className="bg-gray-200 p-4 rounded-md">
            <code className="block text-sm">
              GET /api/algorithms/{`{algorithm}`}/{`{language}`}
            </code>
          </div>

          <h3 className="text-lg font-medium">Request Parameters:</h3>
          <ul className="list-disc list-inside space-y-3 ">
            <li>
              <strong>algorithm:</strong> Name of the algorithm (e.g.,{" "}
              <code>quick-sort</code>, <code>merge-sort</code>).
            </li>
            <li>
              <strong>language:</strong> Programming language for the
              implementation (e.g., <code>java</code>, <code>python</code>).
            </li>
          </ul>

          <h3 className="text-lg font-medium mt-4">Example Request:</h3>
          <pre className="bg-gray-200 p-4 rounded-md text-sm overflow-x-auto">
            {`GET /api/algorithms/quick-sort/java`}
          </pre>

          <h3 className="text-lg font-medium">Example Response:</h3>
          <pre className="bg-gray-200 p-4 rounded-md text-sm overflow-x-auto">
            {`{
  "algorithm": "quick-sort",
  "description": "Quick Sort is an efficient, divide-and-conquer algorithm that sorts { /* Description here */ }",
  "language": "java",
  "code": "public class QuickSort { /* QuickSort Java code here */ }"
}`}
          </pre>

          <h3 className="text-lg font-medium mt-4">Response Status Codes:</h3>
          <ul className="list-disc list-inside space-y-3 ">
            <li>
              <strong>200 OK:</strong> Request succeeded.
            </li>
            <li>
              <strong>404 Not Found:</strong> Algorithm or language not found.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold font-cinzel">
            2. Perform Algorithm Execution (POST) (Coming Soon)
          </h2>
          <p>
            Run the selected algorithm with provided input and get the output.
          </p>

          <div className="bg-gray-200 p-4 rounded-md">
            <code className="block text-sm ">
              POST /api/algorithms/{`{algorithm}`}/{`{language}`}/run
            </code>
          </div>

          <h3 className="text-lg font-medium">Request Body (JSON):</h3>
          <ul className="list-disc list-inside space-y-3 ">
            <li>
              <strong>input:</strong> The input data for the algorithm (e.g.,
              array to sort).
            </li>
          </ul>

          <h3 className="text-lg font-medium mt-4">Example Request:</h3>
          <pre className="bg-gray-200 p-4 rounded-md text-sm overflow-x-auto">
            {`POST /api/algorithms/quick-sort/java/run

{
  "input": [3, 6, 1, 8]
}`}
          </pre>

          <h3 className="text-lg font-medium">Example Response:</h3>
          <pre className="bg-gray-200 p-4 rounded-md text-sm overflow-x-auto">
            {`{
  "algorithm": "quick-sort",
  "language": "java",
  "input": [3, 6, 1, 8],
  "output": [1, 3, 6, 8],
  "executionTime": "25ms"
}`}
          </pre>

          <h3 className="text-lg font-medium mt-4">Response Status Codes:</h3>
          <ul className="list-disc list-inside space-y-3 ">
            <li>
              <strong>200 OK:</strong> Execution succeeded.
            </li>
            <li>
              <strong>400 Bad Request:</strong> Invalid input or parameters.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ApiEndpoints;

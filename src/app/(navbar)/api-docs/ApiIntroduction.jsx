const ApiIntroduction = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6 font-cinzel">API Documentation</h1>

      <div className="flex flex-col gap-10">
        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold font-cinzel">
            Welcome to the Algomorph API
          </h2>
          <p>
            The Algomorph API provides developers with access to various data
            structures and algorithms across multiple programming languages. You
            can retrieve and execute algorithms, making it a valuable tool for
            developers and students.
          </p>
          <p>
            With our API, you can programmatically interact with algorithms,
            execute them with custom inputs, and integrate them into your own
            applications. Whether you&apos;re looking for a sorting algorithm in
            Python or graph traversal techniques in Java, this API has you
            covered.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold font-cinzel">Key Features</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Access a Wide Range of Algorithms:</strong> Retrieve
              implementations of sorting, searching, dynamic programming, graph
              traversal, and more.
            </li>
            <li>
              <strong>Multi-Language Support:</strong> Available in multiple
              languages including Python, Java, C++, JavaScript, and more.
            </li>
            <li>
              <strong>Run and Test Algorithms:</strong> Provide inputs,
              configure specific options, and see real-time outputs with
              complexity analysis.
            </li>
            <li>
              <strong>Easy Integration:</strong> Access the API with simple HTTP
              requests to fetch algorithm implementations or execute them
              remotely.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold font-cinzel">Who is this API for?</h2>
          <p>
            Whether you&apos;re a developer integrating algorithms into your
            application or a student learning data structures the Algomorph API
            is perfect for:
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Developers:</strong> Integrate algorithms into your
              applications effortlessly.
            </li>
            <li>
              <strong>Students & Educators:</strong> Access and execute
              algorithms to understand how they work with real-world inputs.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold font-cinzel">How It Works</h2>
          <p>
            The API is designed to be simple and intuitive. You can perform the
            following actions:
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>GET Requests:</strong> Retrieve algorithms in the language
              of your choice.
            </li>
            <li>
              <strong>POST Requests:</strong> Run algorithms with your input and
              receive real-time results.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold font-cinzel">Base URL</h2>
          <div className="bg-gray-200 p-4 rounded-md">
            <code className="block text-sm">
              Base URL: http://localhost:3000/api/algorithms
            </code>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ApiIntroduction;

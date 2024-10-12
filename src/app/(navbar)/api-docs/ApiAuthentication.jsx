const ApiAuthentication = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">API Authentication</h1>

      <div className="flex flex-col gap-10">
        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">No Authentication Required</h2>
          <p>
            Our Algomorph API is designed to be easily accessible to all users
            without the need for authentication. This means you can start using
            the API immediately, without needing API keys, tokens, or
            authorization headers.
          </p>
          <p>
            Whether you&apos;re a developer testing algorithms or integrating
            them into your application, you can freely make requests to any of
            the available API endpoints. We aim to provide a frictionless
            experience for anyone who wants to interact with our algorithms.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">
            Benefits of No Authentication
          </h2>
          <ul className="list-disc list-inside space-y-3 ">
            <li>
              <strong>Instant Access:</strong> No need to sign up or request API
              keys. You can access and test algorithms as soon as you land on
              the platform.
            </li>
            <li>
              <strong>Simplicity:</strong> With no need for OAuth tokens or
              complex authorization mechanisms, the API remains simple to use,
              especially for educational purposes.
            </li>
            <li>
              <strong>Faster Prototyping:</strong> Developers can quickly
              integrate and experiment with algorithms in their applications
              without any additional setup steps.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Usage Limitations</h2>
          <p>
            While the API does not require authentication, it&apos;s important
            to understand that there may be certain rate limits to ensure fair
            usage for all users.
          </p>
          <p>
            We strive to make the API available to as many users as possible,
            without the complexity of user accounts or subscription tiers.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold ">Security Considerations</h2>
          <p>
            Although the API does not require authentication, we encourage users
            to implement security best practices in their applications when
            using the API. Ensure that you validate user input and sanitize any
            data returned by the API to protect against potential security
            threats.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ApiAuthentication;

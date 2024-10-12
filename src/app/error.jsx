"use client";

const Error = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold">An error occurred:</h1>
      <p className="text-lg text-red-500">{error?.message || error}</p>
    </div>
  );
};

export default Error;

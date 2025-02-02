const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <div className="h-20 w-20 rounded-full border-8 border-t-black animate-spin"></div>
      <h1 className="text-3xl font-kalam absolute top-2/3">algomorph</h1>
    </div>
  );
};

export default Loading;

const Stats = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-gray-400">Algorithms</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">5+</div>
            <div className="text-gray-400">Languages</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">100+</div>
            <div className="text-gray-400">Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div className="text-gray-400">Discussions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

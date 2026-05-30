const Skeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Image */}
      <div className="bg-gray-200 w-full h-52 sm:h-56 lg:h-60 mb-4" />

      {/* Text lines */}
      <div className="space-y-3">
        <div className="bg-gray-200 h-4 w-3/4" />
        <div className="bg-gray-200 h-4 w-1/2" />
      </div>

      {/* Button */}
      <div className="bg-gray-200 h-10 w-full mt-5" />
    </div>
  );
};

export default Skeleton
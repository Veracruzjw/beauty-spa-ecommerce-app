function ProductCardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col justify-between gap-4 md:gap-5 shadow shadow-[#ECECEE] p-2.5 animate-pulse ${className}`}
    >
      {/* Image */}
      <div className="w-full h-44 sm:h-52 md:h-56 bg-gray-300"></div>

      <div className="flex flex-col gap-3 md:gap-5 items-center">
        {/* Title */}
        <div className="w-full flex flex-col items-center gap-2">
          <div className="h-5 md:h-6 bg-gray-200 rounded w-4/5"></div>
          <div className="h-5 md:h-6 bg-gray-200 rounded w-3/5"></div>
        </div>

        {/* Price */}
        <div className="h-6 bg-gray-200 rounded w-1/3"></div>

        {/* Button */}
        <div className="w-full h-12 md:h-14 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton
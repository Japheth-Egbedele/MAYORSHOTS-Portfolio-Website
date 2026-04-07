const Shutter = ({ className = '' }) => (
  <div className={`relative h-16 sm:h-20 md:h-24 flex items-center justify-center overflow-hidden ${className}`}>
    {/* Diagonal stripes creating shutter effect */}
    <div className="absolute inset-0 flex">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="flex-1 bg-gradient-to-b from-black via-gray-800 to-black dark:from-gray-900 dark:via-black dark:to-gray-900"
          style={{
            transform: `skewX(-20deg) translateX(${(i % 2) * 10}px)`,
            opacity: 0.9 + (i % 3) * 0.05,
          }}
        />
      ))}
    </div>
    
    {/* Center aperture circle */}
    <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-4 border-gray-400 dark:border-gray-600 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-800 dark:to-black flex items-center justify-center">
      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-black dark:bg-gray-950 border-2 border-gray-500 dark:border-gray-700">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-red-900/30 to-transparent" />
      </div>
    </div>
    
    {/* Blade lines */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-600 dark:via-gray-500 to-transparent"
          style={{
            transform: `rotate(${i * 30}deg)`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  </div>
);

export default Shutter;

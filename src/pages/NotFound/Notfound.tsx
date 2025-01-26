const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">

      <h1
        className="text-8xl sm:text-[200px]  font-extrabold text-center leading-none relative"
        style={{
          color: "transparent",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #5b3ff5, #d24691, #ffad36, #1a73e8, #121212)",
        }}
      >
        Oops!
      </h1>

      <p className="xs:text-xl text-lg font-semibold mt-4 text-blue-gray-700">404 - PAGE NOT FOUND</p>

      <p className="text-center text-blue-gray-900 max-w-md sm:max-w-lg mt-2 text-sm sm:text-base font-poppins">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-full shadow-md hover:bg-blue-700 transition-all"
      >
        GO TO HOMEPAGE
      </button>
    </div>

  );
};

export default NotFound;

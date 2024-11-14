
const LoginLeftSide = () => {
  return (
    <>
      {/* Left Side - Welcome Section */}
      <div className="w-1/2 p-8 bg-gradient-to-br from-[#6a00ff] via-[#b5179e] to-[#ff8fab] text-white relative flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Photography Contest</h1>
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>

        {/* Decorative Background Shapes */}
        <div className="absolute inset-0 flex items-end justify-end opacity-70">
          <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-[#ff8fab] to-[#ffdfd4] top-10 left-10 blur-lg"></div>
          <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-[#ffdfd4] to-[#ffc4e1] top-32 right-16 blur-md"></div>
          <div className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-[#ffdfd4] to-[#b5179e] bottom-10 left-20 blur-md"></div>
        </div>
      </div>
    </>
  )
};

export default LoginLeftSide;
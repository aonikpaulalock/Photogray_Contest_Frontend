import loadingGif from "../../assets/landingPage/Loading/buttonGif.gif";

const LoadingSpinner = () => {
  return (
    <div className="w-6 h-6 flex items-center gap-x-2">
      <img
        src={loadingGif}
        alt="LoadingSpinner..."
        className="object-cover"
      />
    </div>
  );
};

export default LoadingSpinner;

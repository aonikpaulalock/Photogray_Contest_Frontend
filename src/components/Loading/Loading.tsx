import loadingGif from "../../assets/landingPage/Loading/loading.gif";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={loadingGif}
        alt="Loading..."
        className="object-cover"
      />
    </div>
  );
};

export default Loading;

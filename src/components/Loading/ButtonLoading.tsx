import LoadingSpinner from "./LoadingSpinner";

const ButtonLoading = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-x-2">
      <LoadingSpinner />
      <span>{title}</span>
    </div>
  )
};

export default ButtonLoading;
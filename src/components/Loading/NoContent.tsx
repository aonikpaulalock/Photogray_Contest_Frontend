import { FaRegSadCry } from 'react-icons/fa';

const NoContent = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <FaRegSadCry className="text-6xl text-orange-500" />
      <p className="font-bold text-lg text-orange-400">{message}</p>
    </div>
  );
};

export default NoContent;

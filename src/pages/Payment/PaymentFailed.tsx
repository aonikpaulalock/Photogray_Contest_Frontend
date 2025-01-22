import { FaTimesCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { currentUser } from '../../redux/auth/authSlice';

const PaymentFailed = () => {
  const navigate = useNavigate();
  const user = useAppSelector(currentUser);
  return (
    <div className="flex items-center justify-center h-screen bg-[#d6e5d6]">
      <div className="bg-white rounded-lg shadow-lg sm:p-6 p-3 w-full h-full sm:w-[500px] sm:h-[300px] flex items-center justify-center">
        <div className="flex flex-col items-center">
          {/* Icon */}
          <div className="text-red text-6xl mb-4">
            <FaTimesCircle />
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold mb-2">
            Payment Failed!
          </h1>

          {/* Subheading */}
          <p className="text-gray-600 text-center mb-6">
            Your payment could not be processed !
          </p>

          {/* Retry Button */}
          <button className="bg-red text-white font-medium py-2 px-6 rounded shadow-lg transition-all"
            onClick={() => navigate(`/dashboard/${user?.role}/profile`)}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;

import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { currentUser } from '../../redux/auth/authSlice';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const user = useAppSelector(currentUser);
  return (
    <div className="flex items-center justify-center h-screen bg-[#d6e5d6]">
      <div className="bg-white rounded-lg shadow-lg sm:p-6 p-3 w-full h-full sm:w-[500px] sm:h-[300px] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="text-green text-6xl mb-4">
            <FaCheckCircle />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Payment Successfull !
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Your payment is processed successfully.
          </p>
          <button className="bg-green text-white font-medium py-2 px-4 rounded shadow-lg transition-all"
            onClick={() => navigate(`/dashboard/${user?.role}/profile`)}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaUser, FaLock } from 'react-icons/fa';
import LogingLeftSide from "./LoginLeftSide"
import { FieldValues } from 'react-hook-form';
import ContainForm from '../../components/Form/ContainForm';
import FormInput from '../../components/Form/FormInput';
import { toast } from 'sonner';
import { useLoginUserMutation } from '../../redux/auth/authApi';
import { verifyToken } from '../../utils/verifyToken';
import { setUser, TUser } from '../../redux/auth/authSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import ButtonLoading from '../../components/Loading/ButtonLoading';
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const location = useLocation();
  const [login, { isLoading }] = useLoginUserMutation()
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logged in processing")
    try {
      const res = await login(data).unwrap()
      if (res?.success) {
        const user = verifyToken(res.data.accessToken) as TUser;
        dispatch(setUser({
          user,
          token: res.data.accessToken
        }))
        toast.success(
          res?.message, {
          id: toastId
        })
        const redirectTo = location.state?.from?.pathname || `/dashboard/${user.role}/profile`;
        navigate(redirectTo, { replace: true });
      } else {
        toast.error(res?.data?.errorDetails?.message || "Update failed.", {
          id: toastId,
        });
      }

    } catch (error: any) {
      const errorMessage = error?.data?.message || "Something went wrong";
      toast.error(
        errorMessage,
        { id: toastId }
      )
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#842cff] via-[#f358dc] to-[#ff8fab]">
      <div className="md:w-full lg:w-9/12 flex overflow-hidden rounded-lg shadow-xl md:h-[600px]">
        <LogingLeftSide />

        <div className="w-full bg-white sm:p-8 p-6 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold text-purple-700 mb-6">USER LOGIN</h2>
          <ContainForm
            onSubmit={onSubmit}
            className="w-full max-w-xs space-y-4"
          >
            <FormInput
              type="email"
              name="email"
              className="w-full px-4 py-3 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              icon={<FaUser />}
            />
            <FormInput
              type="password"
              name="password"
              className="w-full px-4 py-3 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              icon={<FaLock />}
            />
            <div className='flex-row md:flex md:justify-between md:items-center md:space-y-0 space-y-2'>
              <div className="flex items-center justify-end text-purple-700 text-sm font-medium">
                <Link
                  to="/forget-password"
                  className="hover:underline">Forgot password?</Link>
              </div>
              <div className="flex items-center justify-end text-purple-700 text-sm font-medium">
                <Link
                  to="/register"
                  className="hover:underline">Create an account !</Link>
              </div>

            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 rounded-full flex items-center justify-center"
            >
              {
                isLoading ? <ButtonLoading
                  title="Submitting.."
                /> : "Login"
              }
            </button>
          </ContainForm>
        </div>
      </div>
    </div>
  )
};

export default Login;
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
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [login] = useLoginUserMutation()
  const onSubmit = async (data: FieldValues) => {
    console.log(data)
    const toastId = toast.loading("Logged in processing")
    try {
      const res = await login(data).unwrap()
      console.log(res)
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({
        user,
        token: res.data.accessToken
      }))
      toast.success(
        "User login successfully", {
        id: toastId
      })

      if (res?.success) {
        navigate(`/dashboard/${user.role}/profile`)
      }

    } catch (error: any) {
      toast.error(
        "Something went wrong",
        { id: toastId }
      )
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#842cff] via-[#f358dc] to-[#ff8fab]">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] flex overflow-hidden rounded-lg shadow-xl h-[600px]">
        <LogingLeftSide />

        {/* Right Side - Login Form */}
        <div className="w-1/2 bg-white p-8 flex flex-col items-center justify-center">
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
            <div className="flex items-center justify-end text-purple-700 text-sm font-medium">
              <a href="#" className="hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 rounded-full"
            >
              LOGIN
            </button>
          </ContainForm>
        </div>
      </div>
    </div>
  )
};

export default Login;
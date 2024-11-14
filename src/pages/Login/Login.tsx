import { FaUser, FaLock } from 'react-icons/fa';
import LogingLeftSide from "./LoginLeftSide"
import { FieldValues } from 'react-hook-form';
import ContainForm from '../../components/Form/ContainForm';
import FormInput from '../../components/Form/FormInput';
const Login = () => {
  const onSubmit = async (data: FieldValues) => {
    console.log(data)
    // const toastId = toast.loading("Logged in processing")
    // try {
    //   const userInfo = {
    //     id: data.id,
    //     password: data.password
    //   }
    //   const res = await login(userInfo).unwrap()
    //   console.log(res)
    //   const user = verifyToken(res.data.accessToken) as TUser;
    //   dispatch(setUser({ user, token: res.data.accessToken }))
    //   toast.success("User login successfully", { id: toastId })

    //   if (res?.data?.needsPasswordChange) {
    //     navigate("/password-change")
    //   } else {
    //     navigate(`/${user.role}/dashboard`)
    //   }

    // } catch (error) {
    //   toast.error("Something went wrong", { id: toastId })
    // }
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
              placeholder="Enter your email"
              icon={<FaUser />}
            />
            <FormInput
              type="password"
              name="password"
              placeholder="Enter your password"
              icon={<FaLock />}
            />
            <div className="flex items-center justify-between text-purple-700 text-sm">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-purple-500" />
                <span className="ml-2">Remember</span>
              </label>
              <a href="#" className="hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 rounded-full mt-4"
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
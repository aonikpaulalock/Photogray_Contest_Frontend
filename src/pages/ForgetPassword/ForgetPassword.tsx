/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues } from "react-hook-form";
import image from "../../assets/landingPage/dashboard/forgetPassword1.webp";
import ContainForm from "../../components/Form/ContainForm";
import FormInput from "../../components/Form/FormInput";
import { useForgetPasswordMutation } from "../../redux/auth/authApi";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import ButtonLoading from "../../components/Loading/ButtonLoading";

const ForgotPassword = () => {
  const [forgetPassword, { isLoading }] = useForgetPasswordMutation()
  const onSubmit = async (values: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      const res = await forgetPassword(values);
      if (res?.data?.success) {
        toast.success('Please check your email');
      }
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Something went wrong !";
      toast.error(
        errorMessage,
        { id: toastId }
      )
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute -top-10 -left-5 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-10 -right-5 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -top-10 -right-5 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      {/* Main container */}
      <div className="relative bg-white shadow-2xl rounded-lg flex overflow-hidden w-full max-w-5xl h-[500px] z-10 p-10">
        {/* Left Section */}
        <div className="w-1/2 flex flex-col justify-center p-6">
          <h2 className="text-3xl font-bold text-primary mb-4 up">Forgot Password</h2>
          <p className="text-SecondPrimary text-lg mb-6 font-medium">
            Enter your e-mail address, and we'll send you reset instructions.
          </p>
          <ContainForm
            onSubmit={onSubmit}
          >
            <div className="mb-6">
              <FormInput
                type="email"
                name="email"
                className="mt-1 w-full border-[3px] border-blue-gray-200 px-4 py-3 rounded-lg shadow-sm outline-none"
                placeholder="Enter your email"
                label="Email Address"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md shadow hover:bg-blue-600 transition-colors duration-200"
            >
              {
                isLoading ? <ButtonLoading
                  title="Submitting.."
                /> : "Reset Password"
              }
            </button>
          </ContainForm>
          <Link
            to="/login"
            className="mt-4 text-blue-500 hover:underline text-sm font-medium text-center">
            Back to Login
          </Link>
        </div>

        {/* Right Section */}
        <div className="w-7/12 relative flex justify-center items-center">
          <img
            src={image}
            alt="Forgot Password Illustration"
            className="p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

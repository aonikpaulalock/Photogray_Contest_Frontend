import { FieldValues } from "react-hook-form";
import image from "../../assets/landingPage/dashboard/resetPassword.png";
import ContainForm from "../../components/Form/ContainForm";
import FormInput from "../../components/Form/FormInput";
import { toast } from "sonner";
import { useResetPasswordMutation } from "../../redux/auth/authApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import ButtonLoading from "../../components/Loading/ButtonLoading";

const ResetPassord = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [resetPassword, { isLoading }] = useResetPasswordMutation()
  const onSubmit = async (values: FieldValues) => {
    const token = searchParams.get("token");
    const userId = searchParams.get("userId");

    const data = {
      newPassword: values.newPassword,
      userId,
    };

    try {
      const res = await resetPassword({
        body: data,
        token,
      });

      if (res?.data?.success) {
        toast.success("Password reset successful!");
        navigate("/login");
      } else {
        toast.error(res?.data?.data?.errorDetails?.message || "Update failed.");
      }
    } catch (error) {
      toast.error("Failed to reset password!");
      console.error(error);
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
          <h2 className="text-3xl font-bold text-primary mb-4 up">Reset Password</h2>
          <p className="text-SecondPrimary text-lg mb-6 font-medium">
            Enter a new password to reset your account and access your profile.
          </p>
          <ContainForm
            onSubmit={onSubmit}
          >
            <div className="mb-6">
              <FormInput
                type="password"
                name="newPassword"
                className="mt-1 w-full border-[3px] border-blue-gray-200 px-4 py-3 rounded-lg shadow-sm outline-none"
                placeholder="Enter your new password"
                label="New Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md shadow hover:bg-blue-600 transition-colors duration-200"
            >
              {
                isLoading ? <ButtonLoading
                  title="Password Resetting.."
                /> : "Reset Password"
              }
            </button>
          </ContainForm>
        </div>

        {/* Right Section */}
        <div className="w-7/12 relative flex justify-center items-center">
          <img
            src={image}
            alt="Reset Password Illustration"
            className="p-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassord;

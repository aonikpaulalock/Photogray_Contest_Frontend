import passwordChange from "../../../assets/landingPage/dashboard/changePassword1.png"
import FormInput from "../../../components/Form/FormInput";
import ContainForm from "../../../components/Form/ContainForm";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema } from "../../../Schemas/changePassword.validation";
import { useChangePasswordMutation } from "../../../redux/auth/authApi";
import { toast } from "sonner";
import { logout } from "../../../redux/auth/authSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import ButtonLoading from "../../../components/Loading/ButtonLoading";
const UserChangePassword = ({ role }: { role: string }) => {
  console.log(role)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const onSubmit = async (values: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      const res = await changePassword(values);
      if (res?.data?.success) {
        dispatch(logout())
        navigate("/login")
        toast.success(res?.data?.message, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.error(res?.data?.errorDetails?.message || "Update failed.", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error('Incorrect Old Password');
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      {/* The wrapper */}
      <div className="flex items-center justify-center">
        <div className="w-3/6">
          <img
            src={passwordChange}
            alt="Illustration"
            className="w-10/12 mx-auto"
          />
        </div>

        {/* Right Section: Form */}
        <ContainForm
          onSubmit={onSubmit}
          defaultValues={
            {
              currentPassword: '',
              newPassword: ''
            }}
          resolver={zodResolver(changePasswordSchema)}
          className="w-4/12 p-6"

        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Change Password
          </h2>
          <div className="mb-4">
            <FormInput
              type="password"
              name="currentPassword"
              className="mt-1 w-full border-[3px] border-blue-gray-200 px-4 py-3 rounded-lg shadow-sm outline-none"
              placeholder="Enter your old password"
              label="Current Password"
            />
          </div>
          <div className="mb-4">
            <FormInput
              type="password"
              name="newPassword"
              className="mt-1 w-full border-[3px] border-blue-gray-200 px-4 py-3 rounded-lg shadow-sm outline-none"
              placeholder="Enter your new password"
              label="New Password"
            />
          </div>
          {/* {error && <p className="text-sm text-red-500 mb-4">{error}</p>} */}
          <div className="flex space-x-4 mt-8">
            <button
              className="flex-1 py-2 rounded-md border-2 border-blue-gray-100 hover:bg-blue-gray-50 transition-colors duration-200"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-500 text-white py-2 rounded-md shadow hover:bg-blue-600 transition-colors duration-200"
            >
              {
                isLoading ? <ButtonLoading
                  title="Submiting"
                /> :
                  "Submit"
              }
            </button>
          </div>
        </ContainForm>
      </div>
    </div>
  );
};

export default UserChangePassword;

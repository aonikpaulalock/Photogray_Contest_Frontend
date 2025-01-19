/* eslint-disable @typescript-eslint/no-explicit-any */
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
        toast.error(res?.data?.errorDetails?.message || "Failed to change password !", {
          id: toastId,
        });
      }
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Failed to change password !!";
      toast.error(
        errorMessage,
        { id: toastId }
      )
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-lg flex items-center justify-center">
      {/* The wrapper */}
      <div className="md:flex md:items-center md:justify-center">
        <div className="w-full md:w-4/6 lg:w-3/6">
          <img
            src={passwordChange}
            alt="Illustration"
            className=" w-full md:w-9/12 lg:w-10/12 md:mx-auto"
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
          className="w-full md:w-6/12 lg:w-4/12 md:p-6 p-4"

        >
          <h2 className="text-2xl font-semibold text-primary uppercase mb-6">
            Change Password
          </h2>
          <div className="mb-4">
            <FormInput
              type="password"
              name="currentPassword"
              className="mt-1 w-full border-[3px] border-SecondPrimary px-4 py-3 rounded-md shadow-sm outline-none"
              placeholder="Enter your old password"
              label="Current Password"
            />
          </div>
          <div className="mb-4">
            <FormInput
              type="password"
              name="newPassword"
              className="mt-1 w-full border-[3px] border-SecondPrimary px-4 py-3 rounded-md shadow-sm outline-none"
              placeholder="Enter your new password"
              label="New Password"
            />
          </div>
          <div className="flex justify-end mt-6">
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

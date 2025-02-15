/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaBriefcase, FaEnvelope, FaGlobe, FaLock, FaUpload, FaUser, FaUserTie } from "react-icons/fa";
import LogingLeftSide from "../Login/LoginLeftSide"
import FormInput from "../../components/Form/FormInput";
import ContainForm from "../../components/Form/ContainForm";
import { Controller, FieldValues } from "react-hook-form";
import FormSelect from "../../components/Form/FromSelect";
import { CountryHelper } from "../../utils/CountryHelper";
import { useRegisterUserMutation } from "../../redux/auth/authApi";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { uploadImageToDB } from "../../utils/ImageUploader";
import { registerDefaultValues } from "../../defaultValues/inputDefaultValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidationSchema } from "../../Schemas/register.validationSchema";
import ButtonLoading from "../../components/Loading/ButtonLoading";
const imageBb_Api = "ab44083a680f1ff8d7a143435888c291";
const Register = () => {
  const navigate = useNavigate()
  const [registerUser, { isLoading }] = useRegisterUserMutation()
  const { countries } = CountryHelper()
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      const profileImage = await uploadImageToDB(data.profileImage, imageBb_Api);

      if (!profileImage) {
        toast.error("Image upload failed. Please try again.", {
          id: toastId,
        });
        return;
      }

      const userInfo = {
        ...data,
        profileImage,
      };

      const res = await registerUser(userInfo).unwrap();
      if (res?.success) {
        toast.success("User registered successfully!", {
          id: toastId,
          duration: 2000,
        });
        navigate("/login");
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
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#842cff] via-[#f358dc] to-[#ff8fab]">
      <div className="md:w-full lg:w-9/12 flex overflow-hidden rounded-lg shadow-xl h-auto">
        <LogingLeftSide />

        <div className="bg-white p-6 lg:p-10 md:p-4">
          <h2 className="text-2xl font-semibold text-purple-700 mb-6 text-center">USER REGISTER</h2>
          <ContainForm
            onSubmit={onSubmit}
            defaultValues={registerDefaultValues}
            resolver={zodResolver(registerValidationSchema)}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full min-w-0"
          >

            <div className="col-span-2 md:col-span-1">
              <FormInput
                type="text"
                name="username"
                className="w-full px-4 py-3 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your username"
                icon={<FaUser />}
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <FormInput
                type="email"
                name="email"
                className="w-full px-4 py-3 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 col-span-2 md:col-span-1"
                placeholder="Enter your email"
                icon={<FaEnvelope />}
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <FormInput
                type="password"
                name="password"
                className="w-full px-4 py-3 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
                icon={<FaLock />}
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <FormInput
                type="text"
                name="designation"
                className="w-full px-4 py-3 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your Designation"
                icon={<FaBriefcase />}
              />
            </div>

            <Controller
              name="bio"
              render={({ field, fieldState: { error } }) => (
                <div className="relative col-span-2">
                  <textarea
                    {...field}
                    className="w-full px-4 py-4 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Bio"
                  />
                  <span className="absolute left-3 top-5 text-purple-600">
                    <FaUserTie />
                  </span>
                  {error && <p className="text-red text-sm font-medium mt-1">{error?.message}</p>}
                </div>
              )}
            />

            <div className="col-span-2 md:col-span-1">
              <FormSelect
                name="country"
                placeholder="Countries"
                className="w-full px-4 py-3 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 "
                options={countries}
                icon={<FaGlobe />}
              />
            </div>

            <Controller
              name="profileImage"
              render={({ field, fieldState: { error } }) => (
                <div className="relative col-span-2 md:col-span-1">
                  <input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file);
                    }}
                    className="hidden"
                    id="file-input"
                  />
                  <label
                    htmlFor="file-input"
                    className="cursor-pointer w-full px-4 py-3 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-start"
                  >
                    <FaUpload className="absolute left-3 top-4" />
                    {field.value ? field.value.name : "Upload profile picture"}
                  </label>
                  {error && <p className="text-red text-sm font-medium mt-1">{error?.message}</p>}
                </div>
              )}
            />
            <div className="col-span-2 flex items-center justify-end  text-sm font-medium">
              <h2 className="text-primary">
                Already have an account ? 
                <Link
                  to="/login"
                  className="text-purple-700 hover:underline"> Please Login</Link>
              </h2>
            </div>
            <div className="col-span-2">
              <button
                disabled={isLoading}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 rounded-full mt-4 flex items-center justify-center"
              >
                {isLoading ? <ButtonLoading title="Submitting.." /> : "Register"}
              </button>
            </div>
          </ContainForm>
        </div>
      </div>
    </div>





  )
};

export default Register;

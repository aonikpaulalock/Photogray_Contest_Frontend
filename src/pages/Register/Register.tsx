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
import { useNavigate } from "react-router-dom";
import { uploadImageToDB } from "../../utils/ImageUploader";
import { registerDefaultValues } from "../../defaultValues/inputDefaultValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidationSchema } from "../../Schemas/register.validationSchema";
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
        toast.error("Registration failed. Please try again.", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error("Something went wrong!", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#842cff] via-[#f358dc] to-[#ff8fab]">
      <div className="w-[95%] md:w-[80%] lg:w-[70%] flex overflow-hidden rounded-lg shadow-xl h-auto">
        <LogingLeftSide />

        {/* Right Side - Login Form */}
        <div className="w-2/3 bg-white p-8 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold text-purple-700 mb-6">USER Register</h2>
          <ContainForm
            onSubmit={onSubmit}
            defaultValues={registerDefaultValues}
            resolver={zodResolver(registerValidationSchema)}
            className="w-full max-w-xs space-y-4"
          >

            <FormInput
              type="text"
              name="username"
              className="w-full px-4 py-3 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your username"
              icon={<FaUser />}
            />

            <FormInput
              type="email"
              name="email"
              className="w-full px-4 py-3 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              icon={<FaEnvelope />}
            />

            <FormInput
              type="password"
              name="password"
              className="w-full px-4 py-3 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              icon={<FaLock />}
            />

            <FormInput
              type="text"
              className="w-full px-4 py-3 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              name="designation"
              placeholder="Enter your Designation"
              icon={<FaBriefcase />}
            />

            <Controller
              name="bio"
              render={({ field, fieldState: { error } }) => (
                <div className="relative">
                  <textarea
                    {...field}
                    className="w-full px-4 py-4 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Bio"
                  />
                  <span className="absolute left-3 top-5 text-purple-600">
                    <FaUserTie />
                  </span>
                  {error && <p className="text-red-400 text-sm font-medium mt-1">{error?.message}</p>}
                </div>
              )}
            />


            <FormSelect
              name="country"
              placeholder="Countries"
              className="w-full px-4 py-3 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              options={countries}
              icon={<FaGlobe />}
            />


            <Controller
              name="profileImage"
              render={({ field, fieldState: { error } }) => (
                <div className="relative">
                  <input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file); // set the file in React Hook Form
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
                  {error && <p className="text-red-400 text-sm font-medium mt-1">{error?.message}</p>}
                </div>
              )}
            />

            <button
              disabled={isLoading}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 rounded-full mt-4"
            >
              {
                isLoading ? "Submiting...." : "Signup"
              }
            </button>
          </ContainForm>
        </div>
      </div>
    </div>
  )
};

export default Register;
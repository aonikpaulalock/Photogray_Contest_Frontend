import { FaBriefcase, FaEnvelope, FaGlobe, FaLock, FaUpload, FaUser, FaUserTie } from "react-icons/fa";
import LogingLeftSide from "../Login/LoginLeftSide"
import FormInput from "../../components/Form/FormInput";
import ContainForm from "../../components/Form/ContainForm";
import { FieldValues } from "react-hook-form";
import FormSelect from "../../components/Form/FromSelect";
import { CountryHelper } from "../../utils/CountryHelper";
const Register = () => {
  const { countries } = CountryHelper()
  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#842cff] via-[#f358dc] to-[#ff8fab]">
      <div className="w-[95%] md:w-[80%] lg:w-[70%] flex overflow-hidden rounded-lg shadow-xl h-[650px]">
        <LogingLeftSide />

        {/* Right Side - Login Form */}
        <div className="w-2/3 bg-white p-8 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold text-purple-700 mb-6">USER Register</h2>
          <ContainForm
            onSubmit={onSubmit}
            className="w-full max-w-xs space-y-4"
          >

            <FormInput
              type="text"
              name="username"
              placeholder="Enter your username"
              icon={<FaUser />}
            />

            <FormInput
              type="email"
              name="email"
              placeholder="Enter your email"
              icon={<FaEnvelope />}
            />

            <FormInput
              type="password"
              name="password"
              placeholder="Enter your password"
              icon={<FaLock />}
            />

            <FormInput
              type="text"
              name="designation"
              placeholder="Enter your Designation"
              icon={<FaBriefcase />}
            />

            <div className="relative">
              <textarea
                className="w-full px-4 py-4 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Bio"
              />
              <span className="absolute left-3 top-5 text-purple-600">
                <FaUserTie />
              </span>
            </div>

            <FormSelect
              name="country"
              placeholder="Countries"
              options={countries}
              icon={<FaGlobe />}
            />

            <div className="relative">
              {/* File Input (Hidden) */}
              <input
                type="file"
                name="profilePhoto"
                className="w-full px-4 py-2 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 opacity-0 absolute inset-0"
                id="file-input"
              />
              <label
                htmlFor="file-input"
                className="cursor-pointer w-full px-4 py-3 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-start"
              >
                <FaUpload className="absolute left-3 top-4" /> Upload profile picture
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 rounded-full mt-4"
            >
              Register
            </button>
          </ContainForm>
        </div>
      </div>
    </div>
  )
};

export default Register;
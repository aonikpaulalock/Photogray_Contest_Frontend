/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import ContainForm from "../../../components/Form/ContainForm";
import { uploadImageToDB } from "../../../utils/ImageUploader";
import { useGetMeUserQuery, useUpdateUserMutation } from "../../../redux/feature/user/userApi";
import { Controller, FieldValues } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import FormInput from "../../../components/Form/FormInput";
import ButtonLoading from "../../../components/Loading/ButtonLoading";
import Loading from "../../../components/Loading/Loading";

const imageBb_Api = "ab44083a680f1ff8d7a143435888c291";

const UserProfile = ({ role }: { role: string }) => {
  console.log(role)
  const { data: userData, isLoading: userLoading } = useGetMeUserQuery(undefined);
  const [profileUpdate, { isLoading }] = useUpdateUserMutation();

  const userDefaultValues = {
    username: userData?.data?.username,
    designation: userData?.data?.designation,
    bio: userData?.data?.bio,
    country: userData?.data?.country,
  };

  const onSubmit = async (values: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      const profileImage = values.profileImage
        ? await uploadImageToDB(values.profileImage, imageBb_Api)
        : userData?.data?.profileImage;

      if (values.profileImage && !profileImage) {
        toast.error("Image upload failed. Please try again.", {
          id: toastId,
        });
        return;
      }

      const userInfo = {
        username: values.username,
        designation: values.designation,
        bio: values.bio,
        country: values.country,
        profileImage,
      };

      const res = await profileUpdate({
        userId: userData?.data?._id,
        data: userInfo,
      }).unwrap();

      if (res?.success) {
        toast.success(res?.message, {
          id: toastId,
          duration: 2000,
        });
 
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        toast.error(res?.data?.errorDetails?.message || "Update failed!", {
          id: toastId,
        });
      }
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Update failed !!";
      toast.error(
        errorMessage,
        { id: toastId }
      )
    }
  };

  if (userLoading) {
    return <Loading />
  }

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-[calc(100vh-15rem)]">

      <ContainForm
        onSubmit={onSubmit}
        defaultValues={userDefaultValues}
        className="bg-white shadow-lg rounded-lg lg:flex block overflow-hidden w-full"
      >
        {/* Left Section: Background Image with Overlay */}
        <div
          className="w-full lg:flex-1 lg:w-2/3  relative bg-cover bg-center min-h-[300px] md:min-h-[400px]"
          style={{
            backgroundImage: `url(${userData?.data?.profileImage || "default-profile-picture.png"})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-35"></div>

          {/* Profile Image on top of the overlay */}
          <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2">
            <img
              src={userData?.data?.profileImage || "default-profile-picture.png"}
              alt="User Profile"
              className="w-32 h-32 object-cover rounded-full border-4 border-SecondPrimary mx-auto"
            />

            {/* Hidden file input */}
            <Controller
              name="profileImage"
              render={({ field, fieldState: { error } }) => (
                <div>
                  <input
                    type="file"
                    id="file-input"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file);
                    }}
                  />
                  {/* Change Photo label */}
                  {!field.value && (
                    <button
                      type="button"
                      onClick={() => document.getElementById("file-input")?.click()}
                      className="mt-4 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors flex items-center justify-between"
                    >
                      <FaUpload className="text-white text-md mr-2" />
                      Change Photo
                    </button>
                  )}
                  {/* Upload button */}
                  {field.value && (
                    <button
                      type="button"
                      className="mt-4 px-7 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors flex items-center justify-between"
                    >
                      <FaUpload className="text-white text-md mr-2" /> {field.value.name}
                    </button>
                  )}
                  {/* Error message */}
                  {error && <p className="text-red-400 text-sm mt-1">{error.message}</p>}
                </div>
              )}
            />
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="lg:flex-1 w-full lg:w-1/3 md:p-10 p-4">
          <h2 className="text-3xl font-semibold text-primary mb-6 uppercase">
            My Profile
          </h2>

          {/* Input Fields */}
          <div className="space-y-6">
            <div className="md:flex md:space-x-4">
              <div className="w-full md:w-1/2">
                <label className="block text-sm text-gray-600 mb-1 font-semibold">
                  Username
                </label>
                <FormInput
                  type="text"
                  name="username"
                  className="w-full text-SecondPrimary border-b-2 border-gray focus:border-SecondPrimary focus:ring-0 outline-none text-sm font-semibold py-2"
                  placeholder="Enter your username"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-sm text-gray-600 mb-1 font-semibold">
                  Designation
                </label>
                <FormInput
                  type="text"
                  className="w-full border-b-2 border-gray focus:border-SecondPrimary focus:ring-0 outline-none text-sm font-semibold text-SecondPrimary py-2"
                  name="designation"
                  placeholder="Enter your Designation"
                />
              </div>
            </div>
            <div className="md:flex md:space-x-4">
              <div className="w-full md:w-1/2">
                <label className="block text-sm text-gray-600 mb-1 font-semibold">
                  Country
                </label>
                <FormInput
                  type="text"
                  className="w-full border-b-2 border-gray focus:border-SecondPrimary focus:ring-0 outline-none text-sm font-semibold text-SecondPrimary py-2"
                  name="country"
                  placeholder="Enter your Country"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-sm text-gray-600 mb-1 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  value={userData?.data?.email}
                  readOnly
                  className="w-full border-b-2 border-gray focus:border-SecondPrimary focus:ring-0 outline-none text-sm font-semibold text-SecondPrimary py-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1 font-semibold">
                Bio
              </label>
              <Controller
                name="bio"
                render={({ field, fieldState: { error } }) => (
                  <div className="relative">
                    <textarea
                      {...field}
                      className="w-full border-b-2 border-gray focus:border-SecondPrimary focus:ring-0 outline-none text-sm font-semibold text-SecondPrimary py-1"
                      placeholder="Bio"
                    />
                    {error && <p className="text-red-400 text-sm font-medium mt-1">{error?.message}</p>}
                  </div>
                )}
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-8 text-right">
            <button
              type="submit"
              className="px-8 py-4 bg-primary text-white"
            >
              {isLoading ? <ButtonLoading title="Updating" /> : "Save"}
            </button>
          </div>
        </div>
      </ContainForm>
    </div>

  );
};

export default UserProfile;

/* eslint-disable @typescript-eslint/no-explicit-any */
import image from "../../../assets/landingPage/dashboard/blog1.png"
import FormInput from "../../../components/Form/FormInput";
import ContainForm from "../../../components/Form/ContainForm";
import { Controller, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { currentUser } from "../../../redux/auth/authSlice";
import { useAppSelector } from "../../../redux/hooks";
import { FaUpload } from "react-icons/fa";
import { useBlogCreateMutation } from "../../../redux/feature/user/blogApi";
import { BlogDefaultValues } from "../../../defaultValues/inputDefaultValues";
import { blogValidationSchema } from "../../../Schemas/blog.validation";
import { uploadImageToDB } from "../../../utils/ImageUploader";
import ButtonLoading from "../../../components/Loading/ButtonLoading";
const imageBb_Api = "ab44083a680f1ff8d7a143435888c291";
const CreateBlog = () => {
  const user = useAppSelector(currentUser)
  const [blogCreate, { isLoading }] = useBlogCreateMutation();
  const onSubmit = async (values: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      const blogPhoto = await uploadImageToDB(values.blogPhoto, imageBb_Api);

      if (!blogPhoto) {
        toast.error("Image upload failed. Please try again.", {
          id: toastId,
        });
        return;
      }

      const blogInfo = {
        ...values,
        blogPhoto,
        userId: user?.userId
      };
      console.log("Form Data:", blogInfo);
      const res = await blogCreate(blogInfo).unwrap();
      if (res?.success) {
        toast.success(res?.message, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.error(res?.data?.errorDetails?.message || "Failed create blog !", {
          id: toastId,
        });
      }
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Failed create blog !!";
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
            src={image}
            alt="Illustration"
            className="w-full md:w-9/12 lg:w-10/12 md:mx-auto"
          />
        </div>

        {/* Right Section: Form */}
        <ContainForm
          onSubmit={onSubmit}
          defaultValues={BlogDefaultValues}
          resolver={zodResolver(blogValidationSchema)}
          className="w-full md:w-6/12 lg:w-4/12  p-2"

        >
          <h2 className="text-2xl font-semibold text-primary uppercase mb-6">
            Create Blog
          </h2>
          <div className="mb-1">
            <FormInput
              type="text"
              name="title"
              className="mt-1 w-full border-[3px] border-SecondPrimary px-4 py-3 rounded-lg shadow-sm outline-none"
              placeholder="Enter your blog title"
            />
          </div>
          {/* <div className="mb-4">
            <FormInput
              type="password"
              name="newPassword"
              className="mt-1 w-full border-[3px] border-blue-gray-200 px-4 py-3 rounded-lg shadow-sm outline-none"
              placeholder="Enter your new password"
              label="New Password"
            />
          </div> */}
          <Controller
            name="content"
            render={({ field, fieldState: { error } }) => (
              <div className="mb-2">
                <textarea
                  {...field}
                  className="mt-1 w-full border-[3px] border-SecondPrimary px-4 py-3 rounded-lg shadow-sm outline-none"
                  placeholder="Write your content"
                />
                {error && <p className="text-red text-sm font-medium mt-1">{error?.message}</p>}
              </div>
            )}
          />

          <Controller
            name="blogPhoto"
            render={({ field, fieldState: { error } }) => (
              <div className="mb-0">
                {/* Hidden file input */}
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
                  className="cursor-pointer mt-1 w-full border-[3px] border-SecondPrimary px-4 py-3 rounded-lg shadow-sm outline-none flex items-center justify-start bg-white relative"
                >
                  {/* Upload icon */}
                  <FaUpload className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray" />

                  {/* Display file name or placeholder */}
                  <span className="pl-8 text-gray font-sm">
                    {field.value ? field.value.name : "Upload profile picture"}
                  </span>
                </label>

                {/* Error message */}
                {error && <p className="text-red text-sm font-medium mt-1">{error?.message}</p>}
              </div>
            )}
          />
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 rounded-md shadow hover:bg-blue-600 transition-colors duration-200 px-10"
            >
              {
                isLoading ? <ButtonLoading
                  title="Submitting..."
                /> : "Submit"
              }
            </button>
          </div>
        </ContainForm>
      </div>
    </div>
  );
};

export default CreateBlog;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, FieldValues } from "react-hook-form";
import ContainForm from "../../../components/Form/ContainForm";
import FormInput from "../../../components/Form/FormInput";
import { FaUpload } from "react-icons/fa";
import { Blog } from "../../../types";
import { toast } from "sonner";
import { uploadImageToDB } from "../../../utils/ImageUploader";
import { useUpdateBlogMutation } from "../../../redux/feature/user/blogApi";
import ButtonLoading from "../../../components/Loading/ButtonLoading";
const imageBb_Api = "ab44083a680f1ff8d7a143435888c291";


const BlogUpdate = ({ blog, closeModal }: { blog: Blog | null, closeModal: () => void }) => {
  const [blogUpdate, { isLoading }] = useUpdateBlogMutation()
  const BlogDefaultValues = {
    title: blog?.title || "",
    content: blog?.content || "",
    blogPhoto: null,
  };
  const onSubmit = async (values: FieldValues) => {
    console.log(values);
    const toastId = toast.loading("Please wait...");
    try {
      //! If a new image is uploaded, process it; otherwise, use the existing one
      const blogPhoto = values.blogPhoto
        ? await uploadImageToDB(values.blogPhoto, imageBb_Api)
        : blog?.blogPhoto;

      if (values.blogPhoto && !blogPhoto) {
        toast.error("Image upload failed. Please try again.", {
          id: toastId,
        });
        return;
      }

      const blogInfo = {
        title: values.title,
        content: values.content,
        blogPhoto,
      };


      const res = await blogUpdate({
        blogId: blog?._id,
        data: blogInfo,
      }).unwrap();


      if (res?.success) {
        toast.success(res?.message, {
          id: toastId,
          duration: 2000,
        });
        closeModal();
      } else {
        toast.error(res?.data?.errorDetails?.message || "Update failed !", {
          id: toastId,
        });
      }
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Update failed.";
      toast.error(
        errorMessage,
        { id: toastId }
      )
    }
  };
  return (
    <ContainForm
      onSubmit={onSubmit}
      defaultValues={BlogDefaultValues}
      className="w-full p-2"

    >
      <div className="mb-1">
        <FormInput
          type="text"
          name="title"
          className="mt-1 w-full border-[3px] border-blue-gray-200 px-4 py-3 rounded-lg shadow-sm outline-none"
          placeholder="Enter your blog title"
        />
      </div>
      <Controller
        name="content"
        render={({ field, fieldState: { error } }) => (
          <div className="mb-2">
            <textarea
              {...field}
              className="mt-1 w-full border-[3px] border-blue-gray-200 px-4 py-3 rounded-lg shadow-sm outline-none"
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
              className="cursor-pointer mt-1 w-full border-[3px] border-blue-gray-200 px-4 py-3 rounded-lg shadow-sm outline-none flex items-center justify-start bg-white relative"
            >

              <FaUpload className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray" />

              <span className="pl-8 text-gray font-sm">
                {field.value ? field.value.name : "Upload profile picture"}
              </span>
            </label>

            {error && <p className="text-red text-sm font-medium mt-1">{error?.message}</p>}
          </div>
        )}
      />
      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded-md shadow hover:bg-blue-600 transition-colors duration-200 px-10"
        >
          {isLoading ?
            <ButtonLoading
              title="Updating.."
            /> :
            "Update"
          }
        </button>
      </div>
    </ContainForm>
  )
};

export default BlogUpdate;
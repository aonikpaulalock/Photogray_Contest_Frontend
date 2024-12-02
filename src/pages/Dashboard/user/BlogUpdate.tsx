import { Controller, FieldValues } from "react-hook-form";
import ContainForm from "../../../components/Form/ContainForm";
import FormInput from "../../../components/Form/FormInput";
import { FaUpload } from "react-icons/fa";

const BlogUpdate = () => {
  //! just set default value of blog data then update
  const onSubmit = async (values: FieldValues) => {
    console.log(values)
    // const toastId = toast.loading("Please wait...");
    // try {
    //   const blogPhoto = await uploadImageToDB(values.blogPhoto, imageBb_Api);

    //   if (!blogPhoto) {
    //     toast.error("Image upload failed. Please try again.", {
    //       id: toastId,
    //     });
    //     return;
    //   }

    //   const blogInfo = {
    //     ...values,
    //     blogPhoto,
    //     userId: user?.userId
    //   };
    //   console.log("Form Data:", blogInfo);
    //   const res = await blogCreate(blogInfo).unwrap();
    //   if (res?.success) {
    //     toast.success(res?.message, {
    //       id: toastId,
    //       duration: 2000,
    //     });
    //   } else {
    //     toast.error(res?.error?.message, {
    //       id: toastId,
    //     });
    //   }
    // } catch (error) {
    //   console.log(error)
    //   toast.error("Something went wrong!", {
    //     id: toastId,
    //     duration: 2000,
    //   });
    // }
  };
  return (
    <ContainForm
    onSubmit={onSubmit}
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
            className="cursor-pointer mt-1 w-full border-[3px] border-blue-gray-200 px-4 py-3 rounded-lg shadow-sm outline-none flex items-center justify-start bg-white relative"
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
        Update
      </button>
    </div>
  </ContainForm>
  )
};

export default BlogUpdate;
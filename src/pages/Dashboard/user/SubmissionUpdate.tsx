/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, FieldValues } from "react-hook-form";
import ContainForm from "../../../components/Form/ContainForm";
import { TSubmission } from "../../../types";
import { FaUpload } from "react-icons/fa";
import FormInput from "../../../components/Form/FormInput";
import { useUpdateSubmissionMutation } from "../../../redux/feature/user/submissionApi";
import { toast } from "sonner";
import { uploadMultipleImagesToDB } from "../../../utils/ImageUploader";
import ButtonLoading from "../../../components/Loading/ButtonLoading";
const imageBb_Api = "ab44083a680f1ff8d7a143435888c291";
const SubmissionUpdate = ({ submission, closeModal }: { submission: TSubmission | null, closeModal: () => void }) => {
  const [updateSubmission, { isLoading }] = useUpdateSubmissionMutation()
  const onSubmit = async (values: FieldValues) => {
    const toastId = toast.loading("Updating Submission...");
    try {
      const newImageUrls = values.images && values.images.length > 0
        ? await uploadMultipleImagesToDB(values.images, imageBb_Api)
        : [];


      const finalImages = newImageUrls.length > 0
        ? [...(submission?.images || []), ...newImageUrls]
        : submission?.images || [];

      const data = {
        images: finalImages,
      };

      const res = await updateSubmission({
        submissionId: submission?._id,
        data,
      }).unwrap();

      if (res?.success) {
        toast.success(res?.message, { id: toastId, duration: 2000 });
        closeModal();
      } else {
        toast.error(res?.data?.errorDetails?.message || "Submission update failed!", { id: toastId });
      }
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Submission update failed !!";
      toast.error(
        errorMessage,
        { id: toastId }
      )
    }
  };


  return (
    <ContainForm onSubmit={onSubmit} className="w-full p-2">
      <div className="mb-1">
        <FormInput
          type="text"
          name="contestId"
          className="mt-1 w-full border-[3px] border-blue-gray-200 px-4 py-3 rounded-lg shadow-sm outline-none placeholder:text-blue-gray-500 placeholder:font-semibold"
          placeholder={submission?.contestId?.title || "Enter contest title"}
          readOnly
        />
      </div>

      <Controller
        name="images"
        render={({ field, fieldState: { error } }) => (
          <div className="mb-0">
            <input
              type="file"
              onChange={(e) => {
                const files = e.target.files;
                field.onChange(files ? Array.from(files) : []);
              }}
              className="hidden"
              id="file-input"
              multiple
            />
            <label
              htmlFor="file-input"
              className="cursor-pointer mt-1 w-full border-[3px] border-blue-gray-200 px-4 py-3 rounded-lg shadow-sm outline-none flex items-center justify-start bg-white relative"
            >
              <FaUpload className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray" />
              <span className="pl-8 text-gray font-sm">
                {field.value && field.value.length > 0
                  ? field.value.map((file: File) => file.name).join(", ")
                  : "Upload up to many contest images."}
              </span>
            </label>
            {error && <p className="text-red text-sm font-medium mt-1">{error.message}</p>}
          </div>
        )}
      />

      <div className="flex justify-start mt-6">
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded-md shadow hover:bg-blue-600 transition-colors duration-200 px-10"
        >
          {
            isLoading ? <ButtonLoading
              title="Submitting.."
            /> : "Submit"
          }
        </button>
      </div>
    </ContainForm>
  )
};

export default SubmissionUpdate;
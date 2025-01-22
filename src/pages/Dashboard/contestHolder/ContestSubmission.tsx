/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, FieldValues } from "react-hook-form";
import ContainForm from "../../../components/Form/ContainForm";
import FormInput from "../../../components/Form/FormInput";
import image from "../../../assets/landingPage/dashboard/contestSubmission.jpg";
import { FaUpload } from "react-icons/fa";
import { useAppSelector } from "../../../redux/hooks";
import { currentUser } from "../../../redux/auth/authSlice";
import { toast } from "sonner";
import { uploadMultipleImagesToDB } from "../../../utils/ImageUploader";
import { useCreateSubmissionMutation } from "../../../redux/feature/user/submissionApi";
import ButtonLoading from "../../../components/Loading/ButtonLoading";
const imageBb_Api = "ab44083a680f1ff8d7a143435888c291";
const ContestSubmission = ({ contest, closeModal }: { contest: any | null; closeModal: () => void }) => {
  const user = useAppSelector(currentUser);
  const [createSubmission, { isLoading }] = useCreateSubmissionMutation();

  const onSubmit = async (values: FieldValues) => {
    const toastId = toast.loading("Uploading Submission...");
    try {
      const imageUrls = await uploadMultipleImagesToDB(values.images, imageBb_Api);

      // Prepare final submission data
      const data = {
        ...values,
        images: imageUrls,
        contestId: contest?.data?._id,
        userId: user?.userId,
      };

      console.log("Final submission data:", data);

      // Submit the data
      const res = await createSubmission(data).unwrap();
      if (res?.success) {
        toast.success(res?.message, { id: toastId, duration: 2000 });
        closeModal();
      } else {
        toast.error(res?.data?.errorDetails?.message || "Submission failed.", { id: toastId });
      }
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Submission failed.";
      toast.error(
        errorMessage,
        { id: toastId }
      )
    }
  };

  return (
    <div className="flex items-center justify-center relative overflow-hidden md:gap-4">
      {/* Main container */}
      <div className="relative bg-white shadow-2xl rounded-lg md:flex overflow-hidden">
        {/* Left Section */}
        <div className="flex flex-col justify-center md:p-4 flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Contest Submission</h2>
          <p className="text-SecondPrimary text-md md:text-lg mb-5 font-medium">
            Let your creativity shine! Submit your entry today and stand out.
          </p>
          <ContainForm onSubmit={onSubmit} className="w-full">
            <div className="mb-1">
              <FormInput
                type="text"
                name="contestId"
                className="mt-1 w-full border-[3px] border-blue-gray-200 px-4 py-3 rounded-lg shadow-sm outline-none placeholder:text-blue-gray-500 placeholder:font-semibold"
                placeholder={contest?.data?.title || "Enter contest title"}
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
        </div>

        {/* Right Section */}
        <div className="relative justify-center items-center flex-1 md:flex hidden">
          <img src={image} alt="Forgot Password Illustration" />
        </div>
      </div>
    </div>
  );
};

export default ContestSubmission;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, FieldValues } from "react-hook-form";
import FormInput from "../../../components/Form/FormInput";
import FormDatePicker from "../../../components/Form/FromDatePicker";
import FormMultiSelect from "../../../components/Form/FromMultiSelect";
import ContainForm from "../../../components/Form/ContainForm";
import { TPhotographyContest } from "../../../types";
import { useUpdateContestMutation } from "../../../redux/feature/contestHolder/contestHolderApi";
import { toast } from "sonner";
import { currentUser } from "../../../redux/auth/authSlice";
import { useAppSelector } from "../../../redux/hooks";
import ButtonLoading from "../../../components/Loading/ButtonLoading";
const options = [
  { value: "important", label: "Important" },
  { value: "urgent", label: "Urgent" },
  { value: "optional", label: "Optional" },
];
const ContestUpdate = ({ contest, closeModal }: { contest: TPhotographyContest | null, closeModal: () => void }) => {
  const user = useAppSelector(currentUser)
  const contestDefaultValues = {
    title: contest?.title || "",
    prize: contest?.prize || "",
    requirements: contest?.requirements || "",
    tags: contest?.tags || [],
    deadline: contest?.deadline || null,
  }

  const [updateContest, { isLoading }] = useUpdateContestMutation()

  const onSubmit = async (values: FieldValues) => {
    const data = {
      ...values,
    }
    const toastId = toast.loading("Please wait...");
    try {
      const res = await updateContest({
        userId: user?.userId,
        role: user?.role,
        contestId: contest?._id,
        data
      }).unwrap();


      if (res?.success) {
        toast.success(res?.message, {
          id: toastId,
          duration: 2000,
        });
        closeModal();
      } else {
        toast.error(res?.data?.errorDetails?.message || "Update failed.", {
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
  return (
    <ContainForm
      onSubmit={onSubmit}
      defaultValues={contestDefaultValues}
      className="w-full"
    >

      {/* Right Section: Form */}
      <div className="w-full sm:p-10 p-0">
        <div className="space-y-6">
          <div className="sm:flex sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-sm text-gray-600 mb-1 font-semibold">
                Contest Name
              </label>
              <FormInput
                type="text"
                name="title"
                className="w-full text-SecondPrimary border-b-2 border-gray focus:border-SecondPrimary focus:ring-0 outline-none text-sm font-medium py-2"
                placeholder="Enter your contest title"
              />
            </div>
            <div className="w-full sm:w-[50%]">
              <label className="block text-sm text-gray-600 mb-1 font-semibold">
                Contest deadline
              </label>
              <FormDatePicker
                name="deadline"
                placeholder="Select a date"
                className="border-b-2 border-gray focus:border-SecondPrimary focus:ring-0 outline-none text-sm font-medium text-SecondPrimary py-2"
              />
            </div>
          </div>
          <div className="sm:flex sm:space-x-4">
            <div className="w-full sm:w-[40%]">
              <label className="block text-sm text-gray-600 mb-1 font-semibold">
                Contest prize
              </label>
              <FormInput
                type="text"
                className="w-full border-b-2 border-gray focus:border-SecondPrimary focus:ring-0 outline-none text-sm font-medium text-SecondPrimary py-2"
                name="prize"
                placeholder="Contest prize"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm text-gray-600 mb-1 font-semibold">
                Contest Tags
              </label>
              <FormMultiSelect
                name="tags"
                className="w-full border-b-2 border-gray focus:border-SecondPrimary focus:ring-0 outline-none text-sm font-medium text-SecondPrimary py-1"
                options={options}
                placeholder="Select tags"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1 font-semibold">
              Requirements
            </label>
            <Controller
              name="requirements"
              render={({ field, fieldState: { error } }) => (
                <div className="relative">
                  <textarea
                    {...field}
                    className="w-full border-b-2 border-gray focus:border-SecondPrimary  focus:ring-0 outline-none text-sm font-medium text-SecondPrimary"
                    placeholder="Enter your requirements"
                  />
                  {error && <p className="text-red-400 text-sm font-medium mt-1">{error?.message}</p>}
                </div>
              )}
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6 text-right">
          <button type="submit" className="px-8 py-4 bg-primary text-white">
            {
              isLoading ? <ButtonLoading
                title="Submitting.."
              /> : "Submit"
            }
          </button>
        </div>
      </div>
    </ContainForm>
  )
};

export default ContestUpdate;
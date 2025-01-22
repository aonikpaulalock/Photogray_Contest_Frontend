/* eslint-disable @typescript-eslint/no-explicit-any */
import ContainForm from "../../../components/Form/ContainForm";
import image from "../../../assets/landingPage/dashboard/contest.png"
import { Controller, FieldValues } from "react-hook-form";
import FormInput from "../../../components/Form/FormInput";
import FormMultiSelect from "../../../components/Form/FromMultiSelect";
import FormDatePicker from "../../../components/Form/FromDatePicker";
import { formatDate } from "../../../utils/dateFormat";
import { toast } from "sonner";
import { useCreateContestMutation } from "../../../redux/feature/contestHolder/contestHolderApi";
import { useAppSelector } from "../../../redux/hooks";
import { currentUser } from "../../../redux/auth/authSlice";
import ButtonLoading from "../../../components/Loading/ButtonLoading";

// const imageBb_Api = "ab44083a680f1ff8d7a143435888c291";

const options = [
  { value: "important", label: "Important" },
  { value: "urgent", label: "Urgent" },
  { value: "optional", label: "Optional" },
];
const ContestHolderCreateContest = ({ role }: { role: string }) => {
  console.log(role)
  const user = useAppSelector(currentUser);
  const [createContest, { isLoading }] = useCreateContestMutation();

  const onSubmit = async (values: FieldValues) => {
    console.log(values);
    const data = {
      ...values,
      userId: user?.userId,
      deadline: values.deadline ? formatDate(values.deadline) : null,
    };
    const toastId = toast.loading("Please wait...");
    try {
      const res = await createContest(data).unwrap();
      console.log(res);
      if (res?.success) {
        toast.success(res?.message, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.error(res?.data?.errorDetails?.message || "Failed to create contest !", {
          id: toastId,
        });
      }
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Failed to create contest !!";
      toast.error(
        errorMessage,
        { id: toastId }
      )
    }
  };

  return (
    <div className="flex items-center justify-center">
      <ContainForm
        onSubmit={onSubmit}
        defaultValues={
          {
            title: "",
            prize: "",
            requirements: "",
            tags: [],
            deadline: null,
          }
        }
        className="bg-white shadow-xl rounded-lg md:flex flex-col md:flex-row overflow-hidden w-full"
      >
        {/* Left Section: Background Image with Overlay */}
        <div
          className="w-full lg:w-2/3 relative bg-contain bg-center bg-no-repeat h-96 md:h-auto"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="absolute inset-3 bg-black opacity-15"></div>
        </div>

        {/* Right Section: Form */}
        <div className="w-full lg:w-2/3 p-6 lg:p-10">
          <h2 className="text-3xl font-semibold text-primary mb-6 uppercase">
            Create Contest
          </h2>
          <div className="space-y-6">
            <div className="lg:flex lg:space-x-4">
              <div className="lg:w-1/2 w-full">
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
              <div className="w-full lg:w-[50%]">
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
            <div className="lg:flex lg:space-x-4">
              <div className="w-full lg:w-[40%]">
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
    </div>
  );
};

export default ContestHolderCreateContest;


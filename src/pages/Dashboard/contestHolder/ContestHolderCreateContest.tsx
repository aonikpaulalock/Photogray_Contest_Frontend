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

// const imageBb_Api = "ab44083a680f1ff8d7a143435888c291";

const options = [
  { value: "important", label: "Important" },
  { value: "urgent", label: "Urgent" },
  { value: "optional", label: "Optional" },
];
const ContestHolderCreateContest = () => {
  const user = useAppSelector(currentUser);
  const [createContest] = useCreateContestMutation();

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
        toast.error(res?.error?.message || "Update failed.", {
          id: toastId,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-[calc(100vh-14rem)]">
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
        className="bg-white shadow-xl rounded-lg flex overflow-hidden w-full"
      >
        {/* Left Section: Background Image with Overlay */}
        <div
          className="w-2/3 relative bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="absolute inset-3 bg-black opacity-15"></div>
        </div>

        {/* Right Section: Form */}
        <div className="w-2/3 p-10">
          <h2 className="text-3xl font-semibold text-primary mb-6 uppercase">
            Create Contest
          </h2>
          <div className="space-y-6">
            <div className="flex space-x-4">
              <div className="w-1/2">
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
              <div className="w-[50%]">
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
            <div className="flex space-x-4">
              <div className="w-[40%]">
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
              Submit
            </button>
          </div>
        </div>
      </ContainForm>
    </div>
  );
};

export default ContestHolderCreateContest;


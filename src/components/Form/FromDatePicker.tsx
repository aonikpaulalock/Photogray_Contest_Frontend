import { Controller, useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import default styles
import { FaCalendarAlt } from "react-icons/fa"; // Import the calendar icon

type TDatePickerProps = {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
};

const FormDatePicker = ({
  name,
  label,
  placeholder,
  className,
}: TDatePickerProps) => {
  const { control } = useFormContext();

  return (
    <div className="mb-4 w-full">
      {label && <label className="block text-sm font-medium mb-2">{label}</label>}
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        render={({ field, fieldState: { error } }) => (
          <div className="relative w-full">
            {/* Position the calendar icon */}
            <FaCalendarAlt className="absolute left-2 top-[45%] transform -translate-y-1/2 text-md text-gray z-20" />
            <DatePicker
              {...field}
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              className={`w-full pl-10 pr-3 py-2 ${className}`} 
              placeholderText={placeholder}
              dateFormat="MM/dd/yyyy"
            />
            {error && (
              <p className="text-red-400 text-sm mt-1">{error.message}</p>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default FormDatePicker;

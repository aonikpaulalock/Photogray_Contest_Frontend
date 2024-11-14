import { Controller } from "react-hook-form";
import { ReactNode } from "react";

type TSelectProps = {
  name: string;
  options: {
    value: string;
    label: string;
    disabled?: boolean
  }[];
  placeholder?: string;
  icon?: ReactNode;
};

const FormSelect = ({
  name,
  options,
  placeholder = "Country",
  icon
}: TSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="relative">
          <select
            {...field}
            className="w-full px-4 py-3 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option
              value=""
              disabled
              selected
              hidden
            >{placeholder}</option>
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          {icon && (
            <span className="absolute left-3 top-4 text-purple-600">
              {icon}
            </span>
          )}
          {error && (
            <small className="text-red-500 font-bold">{error.message}</small>
          )}
        </div>
      )}
    />
  );
};

export default FormSelect;
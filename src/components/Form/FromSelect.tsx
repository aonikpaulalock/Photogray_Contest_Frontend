import { Controller, useFormContext } from "react-hook-form";
import { ReactNode } from "react";

type TSelectProps = {
  name: string;
  options: {
    value: string;
    label: string;
    disabled?: boolean
  }[];
  placeholder?: string;
  className?: string;
  icon?: ReactNode;
};

const FormSelect = ({
  name,
  options,
  placeholder = "Country",
  icon,
  className
}: TSelectProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="relative">
          <select
            {...field}
            className={className}
          >
            <option
              value=""
              disabled
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
          {error && <p className="text-red-400 text-sm font-medium mt-1">{error?.message}</p>}
        </div>
      )}
    />
  );
};

export default FormSelect;
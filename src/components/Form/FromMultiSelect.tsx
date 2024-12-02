import React, { useEffect } from "react";
import { useFormContext, useWatch, Controller } from "react-hook-form";
import { ReactNode } from "react";

type TMultiSelectProps = {
  name: string;
  label?: string; // Optional label
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
  placeholder?: string;
  disabled?: boolean;
  mode?: "multiple";
  icon?: ReactNode;
  className?: string;
  onValueChange: React.Dispatch<React.SetStateAction<string[]>>;
};

const FromMultiSelect = ({
  name,
  label,
  options,
  placeholder = "Select options",
  disabled,
  mode,
  icon,
  className,
  onValueChange,
}: TMultiSelectProps) => {
  const { control } = useFormContext();
  const inputValue = useWatch({ control, name });

  useEffect(() => {
    onValueChange(inputValue || []);
  }, [inputValue, onValueChange]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="relative flex flex-col gap-2">
          {label && <label className="font-medium text-gray-700">{label}</label>}
          <div className="relative">
            <select
              {...field}
              multiple={mode === "multiple"}
              disabled={disabled}
              className={`w-full p-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                error ? "border-red-500" : "border-gray-300"
              } ${className}`}
            >
              {placeholder && (
                <option value="" disabled hidden>
                  {placeholder}
                </option>
              )}
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
          </div>
          {error && <small className="text-red-500 font-bold">{error.message}</small>}
        </div>
      )}
    />
  );
};

export default FromMultiSelect;

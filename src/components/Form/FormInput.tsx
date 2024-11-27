import { Controller, useFormContext } from "react-hook-form";
import { ReactNode } from "react";

type TInputProps = {
  type: string;
  name: string;
  placeholder?: string;
  icon?: ReactNode;
  label?: string;
  className?: string;
};

const FormInput = ({
  type,
  name,
  placeholder,
  icon,
  label,
  className,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="mb-4">
          {/* Render label if provided */}
          {label && (
            <label
              htmlFor={name}
              className="block text-sm text-gray-600 mb-1 font-semibold"
            >
              {label}
            </label>
          )}
          <div className="relative">
            <input
              id={name}
              className={className}
              type={type}
              placeholder={placeholder}
              {...field}
            />
            {icon && (
              <span className="absolute left-3 top-4 text-purple-600">
                {icon}
              </span>
            )}
          </div>
          {error && (
            <p className="text-red text-sm font-medium mt-1">
              {error?.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default FormInput;

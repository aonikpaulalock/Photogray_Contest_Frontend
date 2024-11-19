import { Controller, useFormContext } from "react-hook-form";
import { ReactNode } from "react";

type TInputProps = {
  type: string;
  name: string;
  placeholder?: string;
  icon?: ReactNode;
};

const FormInput = ({ type, name, placeholder, icon }: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="relative">
          <input
            className="w-full px-4 py-3 pl-10 rounded-md bg-purple-100 text-purple-700 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            type={type}
            placeholder={placeholder}
            {...field}
          />
          {icon && (
            <span className="absolute left-3 top-4 text-purple-600">
              {icon}
            </span>
          )}
          {error && <p className="text-red-400 text-sm font-medium mt-t">{error?.message}</p>}
        </div>
      )}
    />
  );
};

export default FormInput;
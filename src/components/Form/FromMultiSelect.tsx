import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";

type TMultiSelectProps = {
  name: string;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
  placeholder?: string;
  className?: string;
};

const FormMultiSelect = ({
  name,
  options,
  placeholder = "Select options or add your own",
  className = "",
}: TMultiSelectProps) => {
  const { control } = useFormContext();
  const [customTags, setCustomTags] = useState<string[]>([]);

  return (
    <Controller
      control={control}
      defaultValue={[]}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="relative">
          <div
            className={`flex flex-wrap gap-1 items-center rounded-md py-2 ${className}`}
          >
            {/* Selected Tags */}
            {field.value.length > 0 &&
              field.value.map((selectedValue: string) => (
                <span
                  key={selectedValue}
                  className="bg-purple-300 text-white px-2 py-1 rounded flex font-normal items-center gap-1"
                >
                  {options.find((o) => o.value === selectedValue)?.label ||
                    customTags.find((tag) => tag === selectedValue) ||
                    selectedValue}
                  <button
                    type="button"
                    onClick={() =>
                      field.onChange(
                        field.value.filter((item: string) => item !== selectedValue)
                      )
                    }
                    className="text-white hover:text-gray-300"
                  >
                    ✖
                  </button>
                </span>
              ))}

            {/* Dropdown for existing options */}
            <select
              className="outline-none bg-transparent flex-grow"
              value=""
              onChange={(e) =>
                field.onChange([...field.value, e.target.value])
              }
            >
              <option value="" disabled hidden>
                {placeholder}
              </option>
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled || field.value.includes(option.value)}
                >
                  {option.label}
                </option>
              ))}
            </select>

            {/* Input for custom tags */}
            <input
              type="text"
              className="outline-none bg-transparent flex-grow text-sm"
              placeholder="Add custom tag..."
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
                  const newTag = e.currentTarget.value.trim();
                  if (!field.value.includes(newTag)) {
                    field.onChange([...field.value, newTag]);
                    setCustomTags([...customTags, newTag]);
                  }
                  e.currentTarget.value = "";
                  e.preventDefault();
                }
              }}
            />
          </div>

          {/* Error message */}
          {error && <p className="text-red-400 text-sm font-medium mt-1">{error?.message}</p>}
        </div>
      )}
    />
  );
};

export default FormMultiSelect;

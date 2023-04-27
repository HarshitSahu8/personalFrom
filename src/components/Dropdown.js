import React from "react";
import { Controller } from "react-hook-form";

const Dropdown = ({
  name,
  options,
  title,
  required,
  control,
  error,
  placeholder,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required }}
      render={({ field }) => (
        <div>
          <div className="flex gap-2 items-center">
            <label
              htmlFor={name}
              required={required}
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              {title}
              {required && <span>*</span>}
            </label>
            <select
              {...field}
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
            >
              <option value={""} disabled hidden selected>
                {placeholder}
              </option>
              {options.map((item, idx) => (
                <option
                  key={idx}
                  value={item.name}
                  label={item.label}
                  selected={item.selected}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          {error && (
            <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {error.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default Dropdown;

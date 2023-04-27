import React from "react";
import { Controller } from "react-hook-form";

const TextField = ({
  title,
  name,
  error,
  required,
  placeholder,
  control,
  type,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div>
          <div className="flex items-center gap-1">
            <label
              htmlFor={name}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {title}
              {required && <span>*</span>}
            </label>
            <input
              id={name}
              name={name}
              placeholder={placeholder}
              value={value}
              type={type}
              onChange={onChange}
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                error && "border-red-500"
              }`}
            />
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

export default TextField;

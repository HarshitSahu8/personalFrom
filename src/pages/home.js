import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
//components
import TextField from "../components/TextField";
import Dropdown from "../components/Dropdown";

//data
import { formData } from "../data/formField";

//API
import { addUser } from "../provider/userApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function AddUser() {
  const navigate = useNavigate();

  //handle Api
  const queryClient = useQueryClient();
  const { mutate } = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
      navigate("/users");
    },
  });

  // Yup validation Schema
  const AddUserSchema = yup.object().shape({
    name: yup.string().required(),
    sex: yup.string().required(),
    age: yup
      .mixed()
      .test("date-or-age", "Invalid date(DD/MM/YYYY) or age", function (value) {
        if (!value) {
          return true;
        }

        // check if the value is a valid date and formate should be DD/MM/YYYY
        if (
          /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/.test(value)
        ) {
          return true;
        }

        // check if the value is a valid age
        if (/^\d+$/.test(value)) {
          const age = parseInt(value);
          return age > 0 && age <= 120;
        }

        // otherwise, the value is invalid
        return false;
      }),
    email: yup.string().email("Must be a valid email"),
    MobileNo: yup
      .string()
      .matches(
        new RegExp(`^${91}[0-9]{10}$`),
        "Invalid mobile number(add 91 beginning of the number)"
      )
      .min(12, "Number is must be 12 digit starts with 91")
      .max(12, "Number is must be 12 digit and starts with 91"),
    emergencyContactNo: yup
      .string()
      .matches(
        new RegExp(`^${91}[0-9]{10}$`),
        "Accept only indian number starts with 91"
      )
      .min(12, "Number is must be 12 digit starts with 91")
      .max(12, "Number is must be 12 digit and starts with 91"),
    IdType: yup.string(),
    IdNo: yup
      .string()
      .when("IdType", (idType) =>
        idType.includes("Adhar")
          ? yup
              .string()
              .min(12, "Must be exactly 12 digits")
              .max(12, "Must be exactly 12 digits")
              .required("Adhar is required")
          : yup
              .string()
              .min(10, "Must be exactly 10 digits")
              .max(10, "Must be exactly 10 digits")
              .required("PAN is required")
      ),
  });
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(AddUserSchema),
    mode: "all",
  });

  const multipleColSpan = ["Govt Issued ID"];

  /**
   *
   * @param {String} title for field label
   * @param {Object} fieldProp contain all the property of field
   */

  const getField = (title, fieldProp) => {
    switch (fieldProp.type) {
      case "dropdown":
        return (
          <Dropdown
            title={title}
            control={control}
            name={fieldProp.name}
            options={fieldProp.options}
            placeholder={fieldProp.placeholder}
            required={fieldProp.required}
            error={errors[fieldProp.name]}
          />
        );
      default:
        return (
          <TextField
            control={control}
            name={fieldProp.name}
            title={title}
            placeholder={fieldProp.placeholder}
            required={fieldProp.required}
            error={errors[fieldProp.name]}
            type={fieldProp.textType}
          />
        );
    }
  };

  const getFieldSetType = (field, idx) => {
    switch (field.type) {
      case "multiple":
        return (
          <div
            className={`grid grid-cols-2 gap-2 ${
              multipleColSpan.includes(field.name) && "col-span-2"
            }`}
          >
            {field.fields.map((item, index) =>
              index === 0 ? (
                <div key={`${idx}_${index}`}>{getField(field.name, item)}</div>
              ) : (
                <div key={`${idx}_${index}`}>{getField("", item)}</div>
              )
            )}
          </div>
        );
      default:
        return (
          <div key={`${field.name}_${idx}`}>
            {getField(field.name, field.fields)}
          </div>
        );
    }
  };

  const calculateAge = (dateOfBirth) => {
    // Convert date string to Date object
    const dob = new Date(dateOfBirth.split("/").reverse().join("-"));

    // Calculate difference between dob and current date in milliseconds
    const diffMs = Date.now() - dob.getTime();

    // Convert milliseconds to years
    const age = Math.floor(diffMs / 31557600000); // Approximate number of milliseconds in a year

    return age;
  };
  const onSubmit = (data) => {
    data = {
      ...data,
      age: data.age.length > 3 ? calculateAge(data.age) : data.age,
    };
    console.log(JSON.stringify(data, null, 2));
    mutate(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div>
        {formData.map((item) => (
          <div>
            <p className="underline font-bold mb-6">{item.section}</p>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {item.fieldList.map((field, idx) => getFieldSetType(field, idx))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <div className="flex gap-2 items-center">
          <button
            type="submit"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Submit <span>(⌘ + S)</span>
          </button>
          <button
            type="button"
            className="text-red-500 bg-white border border-red-300 focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            CANCEL <span>(ESC)</span>
          </button>
        </div>
      </div>
    </form>
  );
}

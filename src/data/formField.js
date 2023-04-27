export const formData = [
  {
    section: "Personal Details",
    fieldList: [
      {
        type: "single",
        name: "Name",
        fields: {
          type: "text",
          name: "name",
          required: true,
          placeholder: "Enter Name",
        },
      },
      {
        type: "single",
        name: "Date of Birth or age",
        fields: {
          type: "text",
          name: "age",
          required: true,
          placeholder: "DD/MM/YYYY or Age in Years",
        },
      },
      {
        type: "single",
        name: "Sex",
        fields: {
          type: "dropdown",
          name: "sex",
          required: true,
          placeholder: "Enter Sex",
          options: [
            { label: "Male", name: "male" },
            { label: "Female", name: "female" },
          ],
        },
      },
      {
        type: "single",
        name: "Mobile No.",
        fields: {
          type: "text",
          name: "MobileNo",
          placeholder: "Enter Mobile",
        },
      },
      {
        type: "multiple",
        name: "Govt Issued ID",
        fields: [
          {
            type: "dropdown",
            name: "IdType",
            options: [
              { label: "Adhar", name: "Adhar" },
              { label: "PAN", name: "PAN" },
            ],
            placeholder: "Enter ID Type",
          },
          {
            type: "text",
            name: "IdNo",
            placeholder: "Enter ID number",
          },
        ],
      },
    ],
  },
  {
    section: "Contact Details",
    fieldList: [
      {
        type: "multiple",
        name: "Guardian Details",
        fields: [
          {
            type: "dropdown",
            name: "guardianType",
            options: [
              { label: "Mr.", name: "Mr" },
              { label: "Mrs.", name: "Mrs" },
            ],
            placeholder: "Enter label",
          },
          {
            type: "text",
            name: "guardianName",
            placeholder: "Enter Guardian Name",
          },
        ],
      },
      {
        type: "single",
        name: "Email",
        fields: {
          type: "text",
          name: "email",
          placeholder: "Enter Email",
        },
      },
      {
        type: "single",
        name: "Emergency Contact Number",
        fields: {
          type: "text",
          name: "emergencyContactNo",
          placeholder: "Enter Emergency No",
        },
      },
    ],
  },
  {
    section: "Address Details",
    fieldList: [
      {
        type: "single",
        name: "Address",
        fields: {
          type: "text",
          name: "address",
          placeholder: "Enter Address",
        },
      },
      {
        type: "single",
        name: "State",
        fields: {
          type: "dropdown",
          name: "state",
          placeholder: "Enter state",
          options: [
            { label: "UP", name: "up" },
            { label: "Delhi", name: "delhi" },
          ],
        },
      },
      {
        type: "single",
        name: "City",
        fields: {
          type: "dropdown",
          name: "City",
          placeholder: "Enter City/Town/Village",
          options: [
            { label: "Kanpur", name: "knp" },
            { label: "Lucknow", name: "lko" },
          ],
        },
      },
      {
        type: "single",
        name: "Country",
        fields: {
          type: "text",
          textType: "search",
          name: "country",
          placeholder: "Enter City/Town/Village",
        },
      },
      {
        type: "single",
        name: "Pincode",
        fields: {
          type: "text",
          name: "pincode",
          placeholder: "Enter Pincode",
        },
      },
    ],
  },
  {
    section: "Other Details",
    fieldList: [
      {
        type: "single",
        name: "Occupation",
        fields: {
          type: "text",
          name: "occupation",
          placeholder: "Enter Occupation",
        },
      },
      {
        type: "single",
        name: "Religion",
        fields: {
          type: "dropdown",
          name: "religion",
          placeholder: "Enter Religion",
          options: [
            { label: "Hindu", name: "hindu" },
            { label: "Sikh", name: "sikh" },
            { label: "Muslims", name: "muslims" },
          ],
        },
      },
      {
        type: "single",
        name: "Marital Status",
        fields: {
          type: "dropdown",
          name: "marital",
          placeholder: "Enter Marital Status",
          options: [
            { label: "Married", name: "married" },
            { label: "Unmarried", name: "unmarried" },
          ],
        },
      },
      {
        type: "single",
        name: "Blood Group",
        fields: {
          type: "dropdown",
          name: "group",
          placeholder: "Group",
          options: [
            { label: "A+", name: "a+" },
            { label: "O+", name: "o+" },
          ],
        },
      },
      {
        type: "single",
        name: "Nationality",
        fields: {
          type: "text",
          name: "nationality",
          textType: "search",
          placeholder: "Enter City/Town/Village",
        },
      },
    ],
  },
];

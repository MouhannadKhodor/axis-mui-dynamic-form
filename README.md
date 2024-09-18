# Axis MUI Dynamic Form

`axis-mui-dynamic-form` is a dynamic form component built with React and Material-UI. It simplifies form creation through a configurable object, supporting a variety of input types with built-in validation and state management.

## Installation

To install the package, run the following command:

```bash
npm install axis-mui-dynamic-form
```

## Usage

Import the `DynamicForm` from the package and use it in your React application:

```javascript
import { DynamicForm } from "axis-mui-dynamic-form";
```

### Form Configuration

Define the `formObject` to configure the form:

```javascript
const formObject = {
  fieldGroups: [
    {
      label: "Basic Inputs",
      fields: [
        {
          type: "text",
          label: "Text Input",
          name: "textInput",
          required: true,
        },
        {
          type: "password",
          label: "Password Input",
          name: "passwordInput",
          required: true,
        },
        {
          type: "number",
          label: "Number Input",
          name: "numberInput",
          required: true,
        },
        {
          type: "textarea",
          label: "Textarea",
          name: "textareaInput",
          required: true,
        },
        {
          type: "email",
          label: "Email Input",
          name: "emailInput",
          required: true,
        },
        {
          type: "phone",
          label: "Phone Input",
          name: "phoneInput",
          required: true,
        },
      ],
    },
    {
      label: "Selection Inputs",
      fields: [
        {
          type: "radio-group",
          label: "Radio Group",
          name: "radioGroup",
          options: [
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
          ],
          required: true,
        },
        {
          type: "checkbox",
          label: "Checkbox Group",
          name: "checkboxGroup",
          options: [
            { label: "Option A", value: "A" },
            { label: "Option B", value: "B" },
          ],
          required: true,
        },
        {
          type: "multi-select",
          label: "Multi-select",
          name: "multiSelect",
          options: [
            { label: "Item 1", value: "item1" },
            { label: "Item 2", value: "item2" },
          ],
          required: true,
        },
        {
          type: "autocomplete",
          label: "Single Select Autocomplete",
          name: "autocompleteInput",
          options: [
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
          ],
          required: true,
        },
        {
          type: "html-select",
          label: "HTML Select",
          name: "htmlSelect",
          options: [
            { label: "Select 1", value: "select1" },
            { label: "Select 2", value: "select2" },
          ],
          required: true,
        },
        {
          type: "html-multi-select",
          label: "HTML Multi Select",
          name: "htmlMultiSelect",
          options: [
            { label: "Option A", value: "A" },
            { label: "Option B", value: "B" },
          ],
          required: true,
        },
      ],
    },
    {
      label: "Pickers",
      fields: [
        {
          type: "datePicker",
          label: "Date Picker",
          name: "datePicker",
          required: true,
        },
        {
          type: "datetimePicker",
          label: "DateTime Picker",
          name: "dateTimePicker",
          required: true,
        },
        {
          type: "timePicker",
          label: "Time Picker",
          name: "timePicker",
          required: true,
        },
        {
          type: "date",
          label: "HTML Date Input",
          name: "htmlDate",
          required: true,
        },
        {
          type: "datetime",
          label: "HTML DateTime Input",
          name: "htmlDateTime",
          required: true,
        },
        {
          type: "time",
          label: "HTML Time Input",
          name: "htmlTime",
          required: true,
        },
      ],
    },
    {
      label: "Other Inputs",
      fields: [
        {
          type: "file",
          label: "File Input",
          name: "fileInput",
          multiple: true,
          required: true,
        },
        {
          type: "transfer-list",
          label: "Transfer List",
          name: "transferList",
          left: ["Item 1", "Item 2"],
          right: ["Item 3"],
          required: true,
        },
        {
          type: "slider",
          label: "Slider Input",
          name: "sliderInput",
          min: 0,
          max: 100,
          step: 1,
          required: true,
        },
        {
          type: "switch",
          label: "Switch Input",
          name: "switchInput",
          required: true,
        },
        {
          type: "star-rating",
          label: "Star Rating",
          name: "starRating",
          required: true,
        },
      ],
    },
    {
      label: "Rich Text Editor Example",
      fields: [
        {
          type: "richText",
          label: "Rich Text Editor",
          name: "richTextEditor",
          required: true,
        },
      ],
    },
  ],
};
```

### Supported Field Types

You can configure the following field types in your `formObject`:

- **Text Inputs**: `type: "text"`, `type: "password"`, `type: "number"`
- **Textarea**: `type: "textarea"`
- **Email Input with Validation**: `type: "email"`
- **Phone Input with MUI-Tel-Input**: `type: "phone"`
- **Slider**: `type: "slider"` with `min`, `max`, and `step` options
- **Radio Group**: `type: "radio-group"` with `options`
- **Checkbox Group**: `type: "checkbox"` with `options`
- **Switch**: `type: "switch"`
- **Autocomplete**: `type: "autocomplete"` for single selection
- **Multi-Select Autocomplete**: `type: "multi-select"`
- **Star Rating**: `type: "star-rating"`
- **Date Picker**: `type: "datePicker"`
- **DateTime Picker**: `type: "datetimePicker"`
- **Time Picker**: `type: "timePicker"`
- **HTML Date Input**: `type: "date"`
- **HTML DateTime Input**: `type: "datetime"`
- **HTML Time Input**: `type: "time"`
- **HTML Select**: `type: "html-select"`
- **HTML Multi Select**: `type: "html-multi-select"`
- **File Input**: `type: "file"` with `multiple` option
- **Transfer List**: `type: "transfer-list"` with `left` and `right` options
- **Rich Text Editor**: `type: "richText"`

### Managing State and Handling Changes

Use React's `useState` to manage form values and handle changes:

```javascript
import React, { useState } from "react";

const App = () => {
  const [formValues, setFormValues] = useState({});

  const handleFieldChange = (fieldName, value) => {
    setFormValues((prev) => ({ ...prev, [fieldName]: value }));
  };

  return (
    <DynamicForm
      formObject={formObject}
      formValues={formValues}
      onFieldChange={handleFieldChange}
    />
  );
};
```

### Building and Submitting the Form

Here is an example of how to submit the form data:

```javascript
const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Form Data:", formValues);
};

return (
  <form onSubmit={handleSubmit}>
    <DynamicForm ... />
    <button type="submit">Submit</button>
  </form>
);
```

## Support

For any issues or questions, please visit our [issues page](https:ithub.com/MouhannadKhodor/axis-mui-dynamic-form/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/MouhannadKhodor/axis-mui-dynamic-form/blob/main/LICENSE) file for details.

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
 import { DynamicForm } from 'axis-mui-dynamic-form';
 ```
 
 ### Form Configuration
 
 Define the `formObject` to configure the form:
 
 ```javascript
 const formObject = {
   fieldGroups: [
     {
       label: "User Information",
       fields: [
         { name: "firstName", label: "First Name", type: "text", required: true },
         { name: "email", label: "Email", type: "email", required: true },
         // Add more fields as needed
       ]
     },
     // More groups can be added here
  ]
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
- **Autocomplete**: `type: "autocomplete"` for multi-selection
- **Star Rating**: `type: "star-rating"`
- **Date Picker**: `type: "date"`
- **DateTime Picker**: `type: "datetime"`
- **Time Picker**: `type: "time"`
- **File Input**: `type: "file"` with `multiple` option
- **Transfer List**: `type: "transfer-list"` with `left` and `right` options

### Managing State and Handling Changes

Use React's `useState` to manage form values and handle changes:

```javascript
import React, { useState } from "react";

const App = () => {
  const [formValues, setFormValues] = useState({});

  const handleFieldChange = (fieldName, value) => {
    setFormValues(prev => ({ ...prev, [fieldName]: value }));
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

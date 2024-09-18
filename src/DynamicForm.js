import React, { useState } from "react";
import { Grid } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextInput from "./components/Reusables/TextInput";
import TextareaInput from "./components/Reusables/TextareaInput";
import EmailInput from "./components/Reusables/EmailInput";
import SliderInput from "./components/Reusables/SliderInput";
import PhoneInput from "./components/Reusables/PhoneInput";
import MultiSelectAutocomplete from "./components/Reusables/MultiSelectAutocomplete";
import SingleSelectAutocomplete from "./components/Reusables/SingleSelectAutocomplete";
import RadioGroupInput from "./components/Reusables/RadioGroupInput";
import CheckboxGroupInput from "./components/Reusables/CheckboxGroupInput";
import SwitchInput from "./components/Reusables/SwitchInput";
import StarRatingInput from "./components/Reusables/StarRatingInput";
import DatePickerInput from "./components/Reusables/DatePickerInput";
import DateTimePickerInput from "./components/Reusables/DateTimePickerInput";
import TimePickerInput from "./components/Reusables/TimePickerInput";
import FileInput from "./components/Reusables/FileInput";
import TransferList from "./components/Reusables/TransferList";
import HTMLDateInput from "./components/Reusables/HTMLDateInput";
import HTMLDateTimeInput from "./components/Reusables/HTMLDateTimeInput";
import HTMLTimeInput from "./components/Reusables/HTMLTimeInput";
import HTMLMultiSelect from "./components/Reusables/HTMLMultiSelect";
import HTMLSelect from "./components/Reusables/HTMLSelect";
import RichTextInput from "./components/Reusables/RichTextInput";

// Updated renderField function using new reusable components
const renderField = (field, value, onChange) => {
  switch (field.type) {
    case "text":
    case "password":
    case "number":
      return (
        <TextInput
          type={field.type}
          label={field.label}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      );
    case "textarea":
      return (
        <TextareaInput
          label={field.label}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      );
    case "email":
      return (
        <EmailInput
          label={field.label}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      );
    case "slider":
      return (
        <SliderInput
          label={field.label}
          value={value}
          onChange={onChange}
          min={field.min}
          max={field.max}
          step={field.step}
          required={field.required}
        />
      );
    case "phone":
      return (
        <PhoneInput
          label={field.label}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      );
    case "radio-group":
      return (
        <RadioGroupInput
          label={field.label}
          options={field.options}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      );
    case "checkbox":
      return (
        <CheckboxGroupInput
          label={field.label}
          options={field.options}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      );
    case "switch":
      return (
        <SwitchInput
          label={field.label}
          checked={value}
          onChange={onChange}
          required={field.required}
        />
      );
    case "autocomplete":
      return (
        <SingleSelectAutocomplete
          label={field.label}
          options={field.options || []}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      );
    case "multi-select":
      return (
        <MultiSelectAutocomplete
          label={field.label}
          options={field.options || []}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      );
    case "html-select":
      return (
        <HTMLSelect
          label={field.label}
          options={field.options || []}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      );
    case "html-multi-select":
      return (
        <HTMLMultiSelect
          label={field.label}
          options={field.options || []}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      );
    case "star-rating":
      return (
        <StarRatingInput
          label={field.label}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      );
    case "datePicker":
      return (
        <DatePickerInput
          label={field.label}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      );
    case "datetimePicker":
      return (
        <DateTimePickerInput
          label={field.label}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      );
    case "timePicker":
      return (
        <TimePickerInput
          label={field.label}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      );
    case "date":
      return (
        <HTMLDateInput
          label={field.label}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      );
    case "datetime":
      return (
        <HTMLDateTimeInput
          label={field.label}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      );
    case "time":
      return (
        <HTMLTimeInput
          label={field.label}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      );
    case "file":
      return (
        <FileInput
          label={field.label}
          onChange={onChange}
          multiple={field.multiple}
          required={field.required}
        />
      );
    case "transfer-list":
      return (
        <TransferList
          left={field.left}
          right={field.right}
          onChange={onChange}
        />
      );
    case "richText":
      return (
        <RichTextInput
          label={field.label}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      );

    default:
      return <div>Unsupported Field</div>;
  }
};

const App = ({ formObject, formValues, onFieldChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form>
        <Grid container spacing={2}>
          {formObject?.fieldGroups.map((group, index) => (
            <Grid item xs={12} key={index}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <h3>{group.label}</h3>
                </Grid>
                {group.fields.map((field, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    {renderField(field, formValues[field.name], (value) =>
                      onFieldChange(field.name, value)
                    )}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </form>
    </LocalizationProvider>
  );
};

export default App;

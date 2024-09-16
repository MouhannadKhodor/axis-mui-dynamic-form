import React from "react";
import { TextField } from "@mui/material";
import { MobileDateTimePicker } from "@mui/x-date-pickers";

const DateTimePickerInput = ({ label, value, onChange, required }) => (
  <MobileDateTimePicker
    label={label}
    value={value}
    onChange={(newValue) => onChange(newValue)}
    renderInput={(params) => <TextField {...params} required={required} />}
  />
);
export default DateTimePickerInput;

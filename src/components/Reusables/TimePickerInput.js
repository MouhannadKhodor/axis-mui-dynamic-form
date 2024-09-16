import React from "react";
import { TextField } from "@mui/material";
import { MobileTimePicker } from "@mui/x-date-pickers";

const TimePickerInput = ({ label, value, onChange, required }) => (
  <MobileTimePicker
    label={label}
    value={value}
    onChange={(newValue) => onChange(newValue)}
    renderInput={(params) => <TextField {...params} required={required} />}
  />
);

export default TimePickerInput;

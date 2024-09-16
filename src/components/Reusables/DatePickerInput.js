import { TextField } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers";

const DatePickerInput = ({ label, value, onChange, required }) => (
  <MobileDatePicker
    label={label}
    value={value}
    onChange={(newValue) => onChange(newValue)}
    renderInput={(params) => <TextField {...params} required={required} />}
  />
);

export default DatePickerInput;

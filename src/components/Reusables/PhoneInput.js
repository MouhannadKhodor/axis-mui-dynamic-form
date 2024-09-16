import React from "react";
import { MuiTelInput } from "mui-tel-input";

const PhoneInput = ({ label, value, onChange, required }) => (
  <MuiTelInput
    label={label}
    value={value}
    onChange={onChange}
    fullWidth
    required={required}
  />
);

export default PhoneInput;

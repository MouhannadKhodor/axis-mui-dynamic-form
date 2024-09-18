import React from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

const RadioGroupInput = ({ label, options, value, onChange, required }) => (
  <RadioGroup
    value={value}
    onChange={(e) => onChange(e.target.value)}
    required={required}
  >
    {options.map((option, idx) => (
      <FormControlLabel
        key={idx}
        value={option.value} // Fix: use option.value instead of the whole object
        control={<Radio />}
        label={option.label} // Fix: use option.label for display
      />
    ))}
  </RadioGroup>
);

export default RadioGroupInput;

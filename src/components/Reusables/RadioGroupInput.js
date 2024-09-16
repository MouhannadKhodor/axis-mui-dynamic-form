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
        value={option}
        control={<Radio />}
        label={option}
      />
    ))}
  </RadioGroup>
);

export default RadioGroupInput;

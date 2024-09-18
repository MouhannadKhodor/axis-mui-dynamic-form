import { Checkbox, FormControlLabel } from "@mui/material";

const CheckboxGroupInput = ({
  label,
  options,
  value = [],
  onChange,
  required,
}) => (
  <>
    {options.map((option, idx) => (
      <FormControlLabel
        key={idx}
        control={
          <Checkbox
            checked={Array.isArray(value) && value.includes(option.value)} // Ensure value is an array
            onChange={(e) => {
              if (e.target.checked) {
                onChange([...value, option.value]); // Add option.value to the array
              } else {
                onChange(value.filter((v) => v !== option.value)); // Remove option.value from the array
              }
            }}
          />
        }
        label={option.label}
      />
    ))}
  </>
);

export default CheckboxGroupInput;

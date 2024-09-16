import { Checkbox, FormControlLabel } from "@mui/material";

const CheckboxGroupInput = ({ label, options, value, onChange, required }) => (
  <>
    {options.map((option, idx) => (
      <FormControlLabel
        key={idx}
        control={
          <Checkbox
            checked={value.includes(option)}
            onChange={(e) => {
              if (e.target.checked) {
                onChange([...value, option]);
              } else {
                onChange(value.filter((v) => v !== option));
              }
            }}
          />
        }
        label={option}
      />
    ))}
  </>
);

export default CheckboxGroupInput;

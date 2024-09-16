import { Autocomplete, TextField } from "@mui/material";

const MultiSelectAutocomplete = ({
  label,
  options,
  value,
  onChange,
  required,
}) => (
  <Autocomplete
    multiple
    options={options}
    value={value}
    onChange={(e, newValue) => onChange(newValue)}
    renderInput={(params) => (
      <TextField {...params} label={label} required={required} />
    )}
  />
);

export default MultiSelectAutocomplete;

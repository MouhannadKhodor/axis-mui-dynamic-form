import { TextField } from "@mui/material";

const TextInput = ({
  label,
  type,
  value,
  onChange,
  required,
  error,
  helperText,
}) => (
  <TextField
    type={type}
    label={label}
    variant="outlined"
    fullWidth
    value={value}
    onChange={(e) => onChange(e.target.value)}
    required={required}
    error={error}
    helperText={error ? helperText : ""}
  />
);

export default TextInput;

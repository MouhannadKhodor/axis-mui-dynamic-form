import { TextField } from "@mui/material";

const TextareaInput = ({
  label,
  value,
  onChange,
  required,
  error,
  helperText,
}) => (
  <TextField
    label={label}
    multiline
    minRows={3}
    fullWidth
    value={value}
    onChange={(e) => onChange(e.target.value)}
    required={required}
    error={error}
    helperText={error ? helperText : ""}
  />
);


export default TextareaInput
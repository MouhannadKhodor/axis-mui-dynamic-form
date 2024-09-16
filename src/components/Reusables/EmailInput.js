import { TextField } from "@mui/material";
import React from "react";

const EmailInput = ({ label, value, onChange, required }) => {
  const [error, setError] = React.useState(false);
  const helperText = "Please enter a valid email address";

  const handleEmailChange = (email) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setError(!isValid);
    onChange(email);
  };

  return (
    <TextField
      type="email"
      label={label}
      variant="outlined"
      fullWidth
      value={value}
      onChange={(e) => handleEmailChange(e.target.value)}
      required={required}
      error={error}
      helperText={error ? helperText : ""}
    />
  );
};

export default EmailInput;

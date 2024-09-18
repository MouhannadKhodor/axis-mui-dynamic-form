import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const SingleSelectAutocomplete = ({
  label,
  options,
  value,
  onChange,
  required,
}) => {

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => (option?.label ? option.label : "")}
      value={value || null} // Ensure the value is either null or a valid object
      onChange={(e, newValue) => onChange(newValue)}
      renderInput={(params) => (
        <TextField {...params} label={label} required={required} />
      )}
    />
  );
};

export default SingleSelectAutocomplete;

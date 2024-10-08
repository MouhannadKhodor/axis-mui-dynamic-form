import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const MultiSelectAutocomplete = ({
  label,
  options,
  value,
  onChange,
  required,
}) => {
  

  return (
    <Autocomplete
      multiple
      limitTags={3}
      options={options}
      getOptionLabel={(option) => (option?.label ? option.label : "")}
      value={value || []} // Ensure value is always an array
      onChange={(e, newValue) => onChange(newValue)}
      renderInput={(params) => (
        <TextField {...params} label={label} required={required} />
      )}
    />
  );
};

export default MultiSelectAutocomplete;

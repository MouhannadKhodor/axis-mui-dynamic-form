import React from "react";
import { FormControlLabel, Switch } from "@mui/material";

const SwitchInput = ({ label, checked, onChange, required }) => (
  <FormControlLabel
    control={
      <Switch checked={checked} onChange={(e) => onChange(e.target.checked)} />
    }
    label={label}
    required={required}
  />
);
export default SwitchInput;

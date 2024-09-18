import React from "react";

const HTMLSelect = ({ label, options, value, onChange, required }) => {
  return (
    <div style={{ margin: "10px 0" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>{label}</label>
      <select
        value={value || ""} // Ensure value is not an object
        onChange={(e) => onChange(e.target.value)}
        required={required}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          width: "100%",
        }}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HTMLSelect;

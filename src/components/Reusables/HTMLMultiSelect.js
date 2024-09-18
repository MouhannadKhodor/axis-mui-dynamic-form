import React from "react";

const HTMLMultiSelect = ({ label, options, value, onChange, required }) => {
  const handleMultiSelectChange = (e) => {
    const selectedValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    onChange(selectedValues);
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>{label}</label>
      <select
        multiple
        value={value || []} // Ensure value is an array
        onChange={handleMultiSelectChange}
        required={required}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          width: "100%",
          height: "150px", // Adjust height for multi-select
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HTMLMultiSelect;

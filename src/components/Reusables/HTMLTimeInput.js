import React from "react";

const HTMLTimeInput = ({ label, value, onChange, required }) => {
  return (
    <div style={{ margin: "10px 0" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>{label}</label>
      <input
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
        }}
      />
    </div>
  );
};

export default HTMLTimeInput;

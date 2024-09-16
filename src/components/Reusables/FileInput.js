import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileInput = ({ label, onChange, multiple = false, required = false }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      onChange(acceptedFiles); // Send the files to the parent component
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple,
    required,
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: "2px dashed #ccc",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>{label} - Drag 'n' drop files here, or click to select files</p>
      )}
    </div>
  );
};

export default FileInput;

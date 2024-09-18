import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const RichTextInput = ({ label, value, onChange, required }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>{label}</label>
      <Editor
        value={value}
        init={{
          height: 200,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
        }}
        onEditorChange={(content) => onChange(content)} // Capture the content
        required={required}
      />
    </div>
  );
};

export default RichTextInput;

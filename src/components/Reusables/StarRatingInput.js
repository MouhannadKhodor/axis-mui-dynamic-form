import { Rating } from "@mui/material";

const StarRatingInput = ({ label, value, onChange, required }) => (
  <>
    <label>{label}</label>
    <Rating
      value={value}
      onChange={(e, newValue) => onChange(newValue)}
      required={required}
    />
  </>
);

export default StarRatingInput;

import { Slider } from "@mui/material";

const SliderInput = ({ label, value, onChange, min, max, step, required }) => (
  <>
    <label>{label}</label>
    <Slider
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={(e, newValue) => onChange(newValue)}
      required={required}
    />
  </>
);
export default SliderInput;

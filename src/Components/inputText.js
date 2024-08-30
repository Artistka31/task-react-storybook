import React from "react";
import "./form.css";

const InputText = ({
  value,
  onChange,
  inputProps,
  size = ["extra-small", "medium", "large", "extra-large"],
  quiet = false,
  error = "",
  disabled = false,
  className = "",
}) => {
  const inputClass = `input-text ${size} ${quiet ? "quiet" : ""} ${className} ${error ? "error" : ""}`;

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={inputClass}
      disabled={disabled}
      {...inputProps}
    />
  );
};

export default InputText;

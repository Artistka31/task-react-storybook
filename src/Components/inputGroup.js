import React, { useState } from "react";
import InputLabel from "./inputLabel";
import InputText from "./inputText";
import InfoIcon from "./infoIcon";
import "./form.css";

const InputGroup = ({
  label = "E-mail",
  inputProps = { id: "email", name: "email" },
  size = ["extra-small", "medium", "large", "extra-large"],
  quiet = false,
  required = true,
  position = "top",
  defaultValue = "",
  disabled = false,
  infoMessage = "Please enter a valid email address",
  validate = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  errorMessage = "Invalid email address",
  annotation = "Please enter your email address.",
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (!validate(newValue)) {
      setError(errorMessage);
    } else {
      setError("");
    }

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="inputform">
      <div className={`input-group ${position}`}>
        <div className="input-group-label-wrapper">
          <InputLabel
            htmlFor={inputProps.id || inputProps.name || "input"}
            position={position}
            required={required}
          >
            {label}
          </InputLabel>
          {infoMessage && <InfoIcon message={infoMessage} />}
        </div>
        <InputText
          value={value}
          onChange={handleChange}
          {...inputProps}
          size={size}
          quiet={quiet}
          disabled={disabled}
          className={error ? "error" : ""}
        />
        {annotation && <div className="input-annotation">{annotation}</div>}
        {error && <small className="error-message">{error}</small>}
      </div>
    </div>
  );
};

export default InputGroup;

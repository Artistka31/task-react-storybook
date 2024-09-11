import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CommandIcon from "./command-stroke-rounded.tsx";
import "./form.css";

const InputText = ({
  id,
  name,
  value,
  onChange,
  inputProps,
  size = ["extra-small", "medium", "large", "extra-large"],
  quiet = false,
  error = "",
  disabled = false,
  className = "",
  autocomplete = "off",
}) => {
  const inputClass = `input-text ${size} ${quiet ? "quiet" : ""} ${className} ${error ? "error" : ""}`;

  return (
    <div className="input-container">
      <div className="input-text-wrapper">
        <span className="input-icon">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <input
          id={id}
          name={name}
          type="text"
          value={value}
          onChange={onChange}
          className={inputClass}
          disabled={disabled}
          autoComplete={autocomplete}
          {...inputProps}
        />
        <span className="info-question">?</span>
        <span className="input-icon-right">
          <CommandIcon width={16} />K
        </span>
      </div>
    </div>
  );
};

export default InputText;

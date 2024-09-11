import React from "react";
import PropTypes from "prop-types";
import "./form.css";

const InputLabel = ({
  htmlFor,
  children,
  position = "top",
  required = false,
  infoMessage,
  isStorybook = true,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`input-label ${position} ${isStorybook ? "storybook" : ""}`}
    >
      {children}
      {infoMessage && (
        <div
          className={`info-icon-wrapper ${position} ${isStorybook ? "storybook" : ""}`}
        >
          <span className="info-icon">i</span>
          <div className="info-tooltip">{infoMessage}</div>
        </div>
      )}
      {required && <span className="required">*</span>}
    </label>
  );
};

InputLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "side"]),
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
  infoMessage: PropTypes.string,
  isStorybook: PropTypes.bool,
};

export default InputLabel;

import React from "react";
import "./form.css";

const InfoIcon = ({ message }) => {
  return (
    <div className="info-icon-wrapper">
      <span className="info-icon">i</span>
      <div className="info-tooltip">{message}</div>
    </div>
  );
};

export default InfoIcon;

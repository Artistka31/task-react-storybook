import React from "react";
import InputGroup from "./inputGroup";
import "./form.css";

function Form() {
  return (
    <form className="form">
      <InputGroup
        label="E-mail"
        inputProps={{ id: "email", name: "email" }}
        size="medium"
        quiet={false}
        required={true}
        position="top"
        defaultValue=""
        validate={(value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)} // Валидация email
        errorMessage="Invalid email address"
        infoMessage="Please enter a valid email address"
      />
    </form>
  );
}

export default Form;

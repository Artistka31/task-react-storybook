import React from "react";
import InputLabel from "../Components/inputLabel";
import "../Components/form.css";

export default {
  title: "Components/InputLabel",
  component: InputLabel,
  argTypes: {
    position: {
      defaultValue: "top",
      options: ["top", "side"],
      control: {
        type: "radio",
      },
      description: "Position of the label relative to the input field",
    },
    required: {
      control: { type: "boolean" },
      description: "Marks the label as required",
    },
    infoMessage: {
      control: { type: "text" },
      description: "Message displayed with the info icon",
    },
    size: {
      options: ["extra-small", "medium", "large", "extra-large"],
      control: {
        type: "select",
      },
      description: "Size of the input field",
    },
    quiet: {
      control: { type: "boolean" },
      description: "Enables quiet mode (no visible border)",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the input field",
    },
  },
};

const Template = (args) => (
  <div className={`input-label-container ${args.position}`}>
    <InputLabel
      htmlFor="input"
      position={args.position}
      required={args.required}
      infoMessage={args.infoMessage}
      isStorybook={true}
    >
      {args.children}
    </InputLabel>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Email",
  position: "top",
  required: false,
  infoMessage: "",
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
};

export const SidePosition = Template.bind({});
SidePosition.args = {
  ...Default.args,
  position: "side",
};

export const WithInfoIcon = Template.bind({});
WithInfoIcon.args = {
  ...Default.args,
  infoMessage: "This is an information icon.",
};

export const Playground = Template.bind({});
Playground.args = {
  ...Default.args,
};

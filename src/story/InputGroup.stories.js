import React from "react";
import { action } from "@storybook/addon-actions";
import InputGroup from "../Components/inputGroup";
import "../Components/form.css";

export default {
  title: "Components/InputGroup",
  component: InputGroup,
  argTypes: {
    size: {
      defaultValue: "medium",
      options: ["extra-small", "medium", "large", "extra-large"],
      control: {
        type: "radio",
      },
      description: "Size of the input field",
    },
    quiet: {
      control: { type: "boolean" },
      description: "Quiet mode with no visible border",
    },
    error: {
      control: { type: "text" },
      description: "Error message to display",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the input field",
    },
    required: {
      control: { type: "boolean" },
      description: "Marks the input field as required",
    },
   position: {
      control: { type: "radio" },
      options: ["top", "side"],
      description: "Position of the label relative to the input field",
    },
    infoMessage: {
      control: { type: "text" },
      description: "Information message displayed near the label",
    },
    onChange: {
      action: "changed",
    },
  },
};

const Template = (args) => <InputGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "E-mail",
  value: "",
  onChange: action("changed"),
  inputProps: { id: "email", name: "email" },
  size: "medium",
  quiet: false,
  required: true,
  position: "top",
  infoMessage: "Please enter a valid email address",
};

export const QuietMode = Template.bind({});
QuietMode.args = {
  ...Default.args,
  quiet: true,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...Default.args,
  error: "Invalid email address",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Sizes = Template.bind({});
Sizes.args = {
  ...Default.args,
  size: "large",
};

export const Playground = Template.bind({});
Playground.args = {
  ...Default.args,
};

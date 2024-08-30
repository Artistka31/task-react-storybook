import React from "react";
import InputText from "../Components/inputText";
import "../Components/form.css";

export default {
  title: "Components/InputText",
  component: InputText,
  argTypes: {
    size: {
      defaultValue: "medium",
      options: ["extra-small", "small", "medium", "large", "extra-large"],
      control: {
        type: "select",
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
  },
};

const Template = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "",
  onChange: () => {},
  inputProps: { id: "input", name: "input" },
  size: "medium",
  quiet: false,
  error: "",
  disabled: false,
};

export const QuietMode = Template.bind({});
QuietMode.args = {
  ...Default.args,
  quiet: true,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...Default.args,
  error: "This field is required",
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

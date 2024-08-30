import React from "react";
import InputAnnotation from "../Components/inputAnnotation";
import "../Components/form.css";

export default {
  title: "Components/InputAnnotation",
  component: InputAnnotation,
  argTypes: {
    text: {
      control: { type: "text" },
      description: "Text displayed as the annotation",
      defaultValue: "This is an annotation",
    },
  },
};

const Template = (args) => <InputAnnotation {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Please enter your email address",
};

export const CustomText = Template.bind({});
CustomText.args = {
  text: "Custom annotation text here",
};

export const Playground = Template.bind({});
Playground.args = {
  text: "Play around with this text",
};

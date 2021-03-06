import React from "react";
import TextField from "./TextField";

export default {
  title: "atoms/TextField",
  component: TextField,
};

const Template = ({ ...args }) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Primary Text",
};

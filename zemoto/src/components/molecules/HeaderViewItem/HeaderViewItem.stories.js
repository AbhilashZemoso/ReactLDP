import React from "react";
import HeaderViewItem from "./HeaderViewItem";

export default {
  title: "molecules/HeaderViewItem",
  component: HeaderViewItem,
};

const Template = ({ ...args }) => <HeaderViewItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Food Item",
};

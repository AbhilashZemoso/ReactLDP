import React from "react";
import CollectionViewItem from "./CollectionViewItem";

export default {
  title: "molecules/CollectionViewItem",
  component: CollectionViewItem,
};

const Template = ({ ...args }) => <CollectionViewItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  special: "What's Special",
  placesCount: 12,
};

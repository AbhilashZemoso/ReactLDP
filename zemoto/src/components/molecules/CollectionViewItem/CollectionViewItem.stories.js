import React from "react";
import CollectionViewItem from "./CollectionViewItem";
import collection1 from "./../../../resources/images/collection1.jpg";


export default {
  title: "molecules/CollectionViewItem",
  component: CollectionViewItem,
};

const Template = ({ ...args }) => <CollectionViewItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  special: "What's Special",
  placesCount: 12,
  foodImg : collection1,
};

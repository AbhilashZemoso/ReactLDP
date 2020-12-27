import React from "react";
import SetLocation from "./setLocation";

export default {
    title: "organisms/setLocation",
    component: SetLocation,
}


const Template = ({...args})=>(
    <SetLocation {...args} />
);


export const Primary = Template.bind({});
Primary.args = {
    primary: true,
}

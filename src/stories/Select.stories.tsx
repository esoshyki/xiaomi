import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../index.css";

import { Select } from "../components/ui";

export default {
    title: "UI/Select",
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	options: [
		{ label: "Первый элемент", value: "first" },
		{ label: "Второй элемент", value: "second" },	
		{ label: "Третий элемент", value: "third" },		
	]
};

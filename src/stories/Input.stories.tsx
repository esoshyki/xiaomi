import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import "../index.css"

import Input from '../components/ui/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
export const WithLabel = Template.bind({})
export const WithError = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};

WithLabel.args = {
  label: "С лейблом"
}

WithError.args = {
    label: "С ошибкой",
    error: "Ошибка сервера"
}


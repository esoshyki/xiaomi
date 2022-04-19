import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import "../index.css"

import Input from '../components/ui/Input';

export default {
  title: 'UI/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
export const WithLabel = Template.bind({})
export const WithError = Template.bind({});
Primary.args = {
  
};

WithLabel.args = {
  label: "С лейблом"
}

WithError.args = {
    label: "С ошибкой",
    error: "Ошибка сервера"
}


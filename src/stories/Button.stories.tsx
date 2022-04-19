import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/ui/Button';

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const Outline = Template.bind({})
export const WithLoader = Template.bind({})
export const WithIcon = Template.bind({})

Primary.args = {
  variant: "primary",
  children: "Обычная"
};

Secondary.args = {
  variant: "secondary",
  children: "Вторичная"
}

Outline.args = {
  variant: "outline",
  children: "Контурная"
}

WithLoader.args = {
  variant: "secondary",
  withLoader: true,
  pending: true,
  children: "С загрузкой"
}

WithIcon.args = {
  variant: "primary",
  icon: "telegram",
  children: "Поделиться"
}

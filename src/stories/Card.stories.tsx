import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from '../components/ui/Card';
import Typography from '../components/ui/Typography';

export default {
  title: 'UI/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: <Typography.Title>Карточка обычная</Typography.Title>,
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import "../index.css"

import Typography from '../components/ui/Typography';
import Container from '../components/ui/Container';

const TypographyWrapper = () => {

  return (
    <Container.Flex>
      <Typography.H1>Заговолок 1</Typography.H1>
      <Typography.H2>Заговолок 2</Typography.H2>
      <Typography.H3>Заговолок 3</Typography.H3>
      <Typography.H4>Заговолок 4</Typography.H4>
      <Typography.H5>Заговолок 5</Typography.H5>
      <Typography.H6>Заговолок 6</Typography.H6>
      <Typography.P>Параграф. Алая вспышка осветила силуэт зазубренного крыла</Typography.P>
      <Typography.Span>Спан. Алая вспышка осветила силуэт зазубренного крыла</Typography.Span>
      <Typography.Error styles={{marginTop: "20px"}}>Ошибка</Typography.Error>
    </Container.Flex>
  )
}

export default {
  title: 'UI/Typography',
  component: TypographyWrapper,
} as ComponentMeta<typeof TypographyWrapper>;

const Template: ComponentStory<typeof TypographyWrapper> = () => <TypographyWrapper />;

export const Primary = Template.bind({});


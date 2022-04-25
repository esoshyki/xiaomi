import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import "../index.css"

import Typography from '../components/ui/Typography';
import Container from '../components/ui/Container';

const TypographyWrapper = () => {

  return (
    <Container.Flex>
      <Typography.Title>Заговолок</Typography.Title>
      <Typography.Main>Основной текст</Typography.Main>
      <Typography.Medium>Средний текст</Typography.Medium>
      <Typography.Small>Мелкий текст</Typography.Small>
      <Typography.Button>Текс в кнопке</Typography.Button>
      <Typography.Link href='#'>Ссылка</Typography.Link>
      <Typography.RublesLarge>≈ 317 руб 00</Typography.RublesLarge>
      <Typography.RublesSmall>≈ 317 руб 00</Typography.RublesSmall>
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


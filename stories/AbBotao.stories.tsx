import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbBotao } from '../src';

// objeto
export default {
  title: 'Componentes/AbBotao',
  component: AbBotao,
} as ComponentMeta<typeof AbBotao>;
// retorna o botão renderizado
const Template: ComponentStory<typeof AbBotao> = () => <AbBotao />;

export const Principal = Template.bind({});

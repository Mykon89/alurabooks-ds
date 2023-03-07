import React from 'react';
import styled from 'styled-components';

// styled-components
const BotaoEstilizado = styled.button`
  background: #eb9b00;
  padding: 16px 24px;
  border: 2px solid #eb9b00;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #b87900;
    border: 2px solid #b87900;
  }
`;

export const AbBotao = () => {
  return <BotaoEstilizado>clique aqui!</BotaoEstilizado>;
};

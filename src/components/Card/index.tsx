import React from 'react';

import {
  Container,
} from './styles';

interface ICardProps {
  color?: string;
}

const Card: React.FC<ICardProps> = ({ color = 'default', children }) => {
  return (
    <Container color={color}>
      { children }
    </Container>
  )
}

export default Card;
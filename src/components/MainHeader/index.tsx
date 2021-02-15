import React from 'react';

import Toggle from '../Toggle';
import { AiOutlineBulb, AiFillBulb  } from 'react-icons/ai';

import {
  Container,
  Welcome,
  Title,
  Username,
  Subtitle,
  ToggleContainer
} from './styles';

const MainHeader: React.FC = () => {
  return (
    <Container>
      <Welcome>
        <Title>Olá, </Title>
        <Username>Walisson Silva! &#128513;</Username>

        <Subtitle>Bem-vindo ao MyFinances! </Subtitle>
      </Welcome>

      <ToggleContainer>
        <AiOutlineBulb size={20} />
        <Toggle
          onChange={() => {}}
          checked={false}
          />
        <AiFillBulb size={20} />
      </ToggleContainer>
    </Container>
  )
};

export default MainHeader;
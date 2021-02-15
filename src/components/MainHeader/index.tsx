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

import { useTheme } from '../../hooks/Theme';

const MainHeader: React.FC = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <Container>
      <Welcome>
        <Title>Olá, </Title>
        <Username>Walisson Silva! &#128513;</Username>

        <Subtitle>Bem-vindo ao MyFinances! </Subtitle>
      </Welcome>

      <ToggleContainer>
        <AiOutlineBulb size={20} color={'#bfbfbf'} />
        <Toggle
          onChange={setIsDark}
          checked={!isDark}
          />
        <AiFillBulb size={20} color={'#f7931b'} />
      </ToggleContainer>
    </Container>
  )
};

export default MainHeader;
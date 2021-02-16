import React from 'react';

import Logo from '../../assets/logo.svg';

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md';

import {
  Container,
  Header,
  LogoImg,
  Title,
  MenuContainer,
  MenuItemLink,
  ItemText
} from './styles';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={Logo} alt={'MyFinances Logo'} />
        <Title>MyFinances</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/">
          <MdDashboard size={26} />
          <ItemText>Dashboard</ItemText>
        </MenuItemLink>

        <MenuItemLink href="/list/income">
          <MdArrowUpward size={26} />
          <ItemText>Receitas</ItemText>
        </MenuItemLink>

        <MenuItemLink href="/list/outcome">
          <MdArrowDownward size={26} />
          <ItemText>Despesas</ItemText>
        </MenuItemLink>

        <MenuItemLink href="/">
          <MdExitToApp size={26} />
          <ItemText>Sair</ItemText>
        </MenuItemLink>
      </MenuContainer>
    </Container>
  )
};

export default Aside;
import styled from 'styled-components';

export const Container = styled.div`
  grid-area: Aside;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};

  height: 100vh;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
`;

export const MenuContainer = styled.nav`
  padding: 70px 0 0;
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  text-decoration: none;
  color: ${props => props.theme.colors.white};
  transition: opacity 0.4s;

  margin: 0 0 30px;

  &:hover {
    opacity: 0.85;
    transition: opacity 0.4s;
  }
`;

export const ItemText = styled.span`
  margin-left: 7px;
  font-size: 18px;
`;
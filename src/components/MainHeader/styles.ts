import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MainHeader;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};

  width: 100%;
`;
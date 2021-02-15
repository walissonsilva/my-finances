import styled from 'styled-components';

export const Container = styled.div`
  grid-area: Content;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};

  padding: 30px;
`;
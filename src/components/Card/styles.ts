import styled from 'styled-components';

interface IContainerProps {
  color: string;
}

export const Container = styled.div<IContainerProps>`
  min-width: 100px;
  min-height: 100px;
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  background-color: ${props => props.color === 'default' ? props.theme.colors.primary : props.color };
  color: ${props => props.theme.colors.white};
  padding: 20px;
`;
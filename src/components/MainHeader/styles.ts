import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MainHeader;
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};

  width: 100%;
  padding: 10px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Welcome = styled.div`
  
`;

export const Title = styled.h2`
  display: inline;
  font-size: 22px;
  font-weight: 500;
`;

export const Username = styled.span`
  font-size: 22px;
  font-weight: 500;
`;

export const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 300;
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;
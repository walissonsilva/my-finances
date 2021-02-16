import styled from 'styled-components';

export const Container = styled.div`
  grid-area: Content;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};

  padding: 30px;
  height: calc(100vh - 80px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: none;
    -webkit-box-shadow: none;
    background-color: transparent;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
      border-radius: 20px;
      box-shadow: inset 0 0 6px ${props => props.theme.colors.primary};
      background-color: ${props => props.theme.colors.primary + '33'};
      -webkit-box-shadow: inset 0 0 6px ${props => props.theme.colors.primary}; 
  }
`;
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
  grid-template-columns: 180px auto;
  grid-template-areas: 'Aside MainHeader' 'Aside Content';

  height: 100%;
`;
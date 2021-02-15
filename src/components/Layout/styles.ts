import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
  grid-template-columns: 200px auto;
  grid-template-areas: 'Aside MainHeader' 'Aside Content';

  height: 100%;
`;
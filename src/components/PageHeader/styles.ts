import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;

  &::after {
    display: block;
    position: relative;
    content: "";
    border-bottom: 3px solid ${props => props.theme.colors.warning};
    width: 80px;
  }
`;

export const SelectContainer = styled.div`
  & > select:first-child {
    margin-right: 10px;
  }
`;
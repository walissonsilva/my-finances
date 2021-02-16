import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  select {
    width: 130px;
    background-color: white;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 4px;
    display: inline-block;
    line-height: 1.5em;
    padding: 0.5em 0.5em 0.5em 1em;
    font-size: 12px;
    color: ${props => props.theme.colors.white};

    -webkit-appearance: none;
    -moz-appearance: none;

    background-image:
    linear-gradient(45deg, transparent 50%, ${props => props.theme.colors.gray} 50%),
    linear-gradient(135deg, ${props => props.theme.colors.gray} 50%, transparent 50%);
    /* linear-gradient(to right, #ccc, #ccc); */
    background-position:
      calc(100% - 15px) calc(1em + 2px),
      calc(100% - 10px) calc(1em + 2px),
      calc(100% - 2.5em) 0.5em;
    background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
    background-repeat: no-repeat;
    background-color: ${props => props.theme.colors.tertiary};
  }
`;

export const SelectLabel = styled.span`
  font-size: 12px;
  color: ${props => props.theme.colors.gray};
  padding-left: 4px;
`;

export const Select = styled.div`
  position: relative;
  height: 30px;
  width: auto;
  min-width: 150px;
  border-radius: 4px;
  text-indent: 0.3rem;
  color: ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.primary};
  font-size: 16px;
  line-height: 30px;
  padding: 0 5px;
`;

export const SelectOptions = styled.div`
  position: absolute;
  top: 30px;

  min-width: 150px;
`;

export const Option = styled.option`
  color: ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.primary};
  padding: 4px 10px;
  font-size: 14px;
`;
import React from 'react';

import {
  Container,
  SelectLabel,
} from './styles';

export interface IOption {
  label: string;
  value: string;
}

interface ISelectInputProps {
  label?: string;
  name: string;
  options: IOption[];
}

const SelectInput: React.FC<ISelectInputProps> = ({
  label = '',
  name,
  options
}) => {
  return (
    <Container>
      <SelectLabel>{ label }</SelectLabel>
      <select name={name}>
        {options.map((option: IOption) => {
          return <option key={option.value} value={option.value}>{ option.value }</option>
        })}
      </select>
    </Container>
  )
}

export default SelectInput;
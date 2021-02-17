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
  value: string;
  options: IOption[];
  handleChange: ((event: React.ChangeEvent<HTMLSelectElement>) => void) | undefined;
}

const SelectInput: React.FC<ISelectInputProps> = ({
  label = '',
  name,
  value,
  options,
  handleChange,
}) => {
  return (
    <Container>
      <SelectLabel>{ label }</SelectLabel>
      <select name={name} onChange={handleChange} value={value}>
        {options.map((option: IOption) => {
          return <option
            key={option.value}
            value={option.value}>
              { option.value }
            </option>
        })}
      </select>
    </Container>
  )
}

export default SelectInput;
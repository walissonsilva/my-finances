import React from 'react';

import SelectInput, { IOption } from '../SelectInput';

import {
  Container,
  Title,
  SelectContainer
} from './styles';

interface IPageHeaderProps {
  title: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title }) => {
  const options: IOption[] = [
    {
      label: 'Janeiro',
      value: 'Janeiro'
    },
    {
      label: 'Fevereiro',
      value: 'Fevereiro'
    },
  ];

  const optionsYear: IOption[] = [
    {
      label: '2021',
      value: '2021'
    },
    {
      label: '2020',
      value: '2020'
    },
  ];

  return (
    <Container>
      <Title>{ title }</Title>

      <SelectContainer>
        <SelectInput
          label={'Mês'}
          name={'month'}
          options={options}
        />

        <SelectInput
          label={'Ano'}
          name={'month'}
          options={optionsYear}
        />
      </SelectContainer>
    </Container>
  );
}

export default PageHeader;
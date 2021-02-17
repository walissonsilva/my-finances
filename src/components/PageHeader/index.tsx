import React from 'react';

import SelectInput from '../SelectInput';

import { useSelectMonthYear } from '../../hooks/SelectMonthYear';

import {
  Container,
  Title,
  SelectContainer
} from './styles';

interface IPageHeaderProps {
  title: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title }) => {
  const {
    yearOptions,
    monthOptions,
    handleYearChange,
    handleMonthChange,
    monthSelected,
    yearSelected,
  } = useSelectMonthYear();

  return (
    <Container>
      <Title>{ title }</Title>

      <SelectContainer>
        <SelectInput
          label={'Mês'}
          name={'month'}
          value={monthSelected}
          options={monthOptions}
          handleChange={handleMonthChange}
        />

        <SelectInput
          label={'Ano'}
          name={'year'}
          value={yearSelected}
          options={yearOptions}
          handleChange={handleYearChange}
        />
      </SelectContainer>
    </Container>
  );
}

export default PageHeader;
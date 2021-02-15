import React from 'react';

import {
  Container,
  Title,
  SelectContainer
} from './styles';

interface IPageHeaderProps {
  title: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title }) => {
  return (
    <Container>
      <Title>{ title }</Title>

      <SelectContainer>
        <select>
          <option value="">Janeiro</option>
          <option value="">Fevereiro</option>
        </select>
        
        <select>
          <option value="">Janeiro</option>
          <option value="">Fevereiro</option>
        </select>
      </SelectContainer>
    </Container>
  );
}

export default PageHeader;
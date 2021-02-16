import React from 'react';
import Card from '..';

import {
  Container,
  TitleAmount,
  Title,
  Amount,
  Icon,
  UpdatedInfo,
} from './styles';

interface IIconCardProps {
  title: string;
  amount: number;
  icon?: string;
  color: string;
  last_updated_date?: string;
  last_updated_time?: string;
}

const IconCard: React.FC<IIconCardProps> = ({
  title,
  amount,
  icon,
  color,
  last_updated_date,
  last_updated_time
}) => {
  return (
    <Card color={color}>
      <Container>
        <TitleAmount>
          <Title>{ title }</Title>
          <Amount>R$ { amount }</Amount>
        </TitleAmount>

        <UpdatedInfo>
          { last_updated_date && `Última atualização em ${last_updated_date}, às ${last_updated_time}`}
          { !last_updated_date && 'Atualizado com base nas receitas e despesas' }
        </UpdatedInfo>
        
        {icon && <Icon src={icon} alt={title} />}
      </Container>
    </Card>
  )
}

export default IconCard;
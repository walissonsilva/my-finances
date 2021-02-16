import React from 'react';
import CountUp from 'react-countup';

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
          <Amount>
            <CountUp
              start={0}
              end={amount}
              duration={1}
              decimals={2}
              decimal=","
              prefix={'R$ '}
              separator=" "
            />
          </Amount>
        </TitleAmount>

        {icon && <Icon src={icon} alt={title} />}

        <UpdatedInfo>
          { last_updated_date && `Última atualização em ${last_updated_date}, às ${last_updated_time}`}
          { !last_updated_date && 'Atualizado com base nas receitas e despesas' }
        </UpdatedInfo>
      </Container>
    </Card>
  )
}

export default IconCard;
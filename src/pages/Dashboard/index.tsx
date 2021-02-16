import React from 'react';

import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';

import dollarImg from '../../assets/dollar.svg';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';

import {
  Container,
  SummaryContainer,
} from './styles';
import IconCard from '../../components/Card/IconCard';

import { useTheme } from '../../hooks/Theme';

const Dashboard = () => {
  const { isDark } = useTheme();

  return (
    <Layout>
      <Container>
        <PageHeader title={'Dashboard'} />

        <SummaryContainer>
          <IconCard
            title='Saldo'
            amount={130.45}
            icon={dollarImg}
            color={isDark ? '#f7931b' : '#3b5998' }
          />

          <IconCard
            title='Receitas'
            amount={552.64}
            icon={arrowUp}
            color={isDark ? '#4e41f0' : '#03bb85'}
            last_updated_date={'16/02/2021'}
            last_updated_time={'14:51'}
          />

          <IconCard
            title='Despesas'
            amount={422.19}
            icon={arrowDown}
            color={isDark ? '#e44c4e' : '#ff6961' }
            last_updated_date={'05/02/2021'}
            last_updated_time={'12:06'}
          />
        </SummaryContainer>
      </Container>
    </Layout>
  )
};

export default Dashboard;
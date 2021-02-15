import React from 'react';

import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';

import {
  Container
} from './styles';

const Dashboard = () => {
  return (
    <Layout>
      <Container>
        <PageHeader title={'Dashboard'} />
      </Container>
    </Layout>
  )
};

export default Dashboard;
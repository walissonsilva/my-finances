import { stringify } from 'querystring';
import React from 'react';

import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';

import {
  Container
} from './styles';

interface IRouteParams {
  match: { params: { type: string } };
}

const List: React.FC<IRouteParams> = ({ match }) => {
  return (
    <Layout>
      <Container>
        <PageHeader title={ match.params.type === 'income' ? 'Receitas' : 'Despesas' } />
      </Container>
    </Layout>
  )
};

export default List;
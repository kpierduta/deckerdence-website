import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Festival from '../components/Festival';

export default class Wedding extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <Festival />
      </Layout>
    );
  }
}

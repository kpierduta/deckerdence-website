import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import PageTitle from '../components/elments/PageTitle';

export default class Wedding extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <PageHeading title="Gallery" />
        <PageTitle title="Weddings" />
      </Layout>
    );
  }
}

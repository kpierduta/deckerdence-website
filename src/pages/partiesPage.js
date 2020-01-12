import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PartiesHero from '../components/PartiesHero';
import PageHeading from '../components/PageHeading';

export default class PartiesPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <PartiesHero />
        <PageHeading
          subtitle="The bus provides an amazing focal point, and provides
          many different zones for your party."
        />
      </Layout>
    );
  }
}

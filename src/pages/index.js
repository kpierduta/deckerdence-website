import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import Weddings from '../components/Wedding';
import Party from '../components/Party';
import Events from '../components/Events';
import Hospitality from '../components/Hospitality';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <HomeHero />
        <Weddings />
        <Party />
        <Events />
        <Hospitality />
      </Layout>
    );
  }
}

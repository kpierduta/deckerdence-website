import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import TowBarHero from '../components/TowBarHero';

export default class TowBarPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <PageHeading
          title="The Tow Bar"
          subTitle="Our converted trailer bar makes a great addition to any event. The To Bar is ideal for serving welcome drinks as your guests arrive."
        />
        <TowBarHero towBgImage="/images/towbar/photo@2x.png" />
      </Layout>
    );
  }
}

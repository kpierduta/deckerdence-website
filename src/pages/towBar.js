import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import TowBarHero from '../components/TowBarHero';

const TowBarPage = () => (
  <Layout>
    <Seo title="Home" description="Welcome to GatsbyJs v1" />
    <PageHeading
      title="The Tow Bar"
      subTitle="Our converted trailer bar makes a great addition to any event. The To Bar is ideal for serving welcome drinks as your guests arrive."
    />
    <TowBarHero towBgImage="/images/towbar/photo@2x.png" />
    <div className="columns">
      <div className="column">
        <img src="/images/towbar/hire.png" alt="" />
      </div>
      <div className="column">
        <img src="/images/towbar/hire-2.png" alt="" />
      </div>
    </div>
  </Layout>
);

export default TowBarPage;

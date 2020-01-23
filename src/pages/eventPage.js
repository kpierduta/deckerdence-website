import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PartiesHero from '../components/PartiesHero';
import PageHeading from '../components/PageHeading';
import StagesSection from '../components/StagesSection';
import Festival from '../components/Festival';
import DetailsSection from '../components/DetailsSection';

export default class EventPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <PartiesHero
          title="Parties for all occasions"
          partybgImage="/images/parties/photo@2x.png"
        />
        <PageHeading title="We can provide everything you need for the ultimate event" />
        <StagesSection title="We can provide everything you need for the ultimate event" />
        <Festival />
        <DetailsSection />
      </Layout>
    );
  }
}

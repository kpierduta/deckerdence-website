import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PartiesHero from '../components/PartiesHero';
import PageHeading from '../components/PageHeading';
import StagesSection from '../components/StagesSection';
import Festival from '../components/Festival';
import DetailsCardSection from '../components/DetailsCardSection';

export default class EventPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <PartiesHero
          title="Parties for all occasions"
          partyBgImage="/images/parties/photo@2x.png"
        />
        <PageHeading title="We can provide everything you need for the ultimate event" />
        <StagesSection title="We can provide everything you need for the ultimate event" />
        <Festival
          title="  OUR VENUE IS PERFCT FOR..."
          subtitle="...AND CAN TRAVEL ANYWHERE IN THE UK"
        />
        <DetailsCardSection />
      </Layout>
    );
  }
}

import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PartiesHero from '../components/PartiesHero';
import PageHeading from '../components/PageHeading';
import StagesSection from '../components/StagesSection';
import VenueSection from '../components/VenueSection';

export default class PartiesPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <PartiesHero
          title="Parties for all occasions"
          partybgImage="/images/parties/photo@2x.png"
        />
        <PageHeading
          subtitle="The bus provides an amazing focal point, and provides
          many different zones for your party."
        />
        <StagesSection title="Stages" />
        <VenueSection
          leftFrame="/images/parties/frame@2x.png"
          leftText="We remain on site to look after everything from start to finish."
          leftAlt="main"
          FrameBgImage=" /images/parties/photo-black-and-white@2x.png"
        />
      </Layout>
    );
  }
}

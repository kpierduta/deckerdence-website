import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PartiesHero from '../components/PartiesHero';
import PageHeading from '../components/PageHeading';
import StagesSection from '../components/StagesSection';
import VenueSection from '../components/VenueSection';
import DetailsCardSection from '../components/DetailsCardSection';
import Gallery from '../components/Gallery';

const PartiesPage = () => (
  <Layout>
    <Seo title="Home" description="Welcome to GatsbyJs v1" />
    <PartiesHero
      title="Parties for all occasions"
      partyBgImage="/images/parties/photo@2x.png"
    />
    <PageHeading
      subTitle="The bus provides an amazing focal point, and provides
          many different zones for your party."
    />
    <StagesSection />
    <VenueSection
      frame="/images/parties/frame@2x.png"
      text="We remain on site to look after everything from start to finish."
      alt="main"
      frameBgImage="/images/parties/photo-black-and-white@2x.png"
    />
    <DetailsCardSection />
    <VenueSection
      flex
      color
      frame="/images/parties/rightframes.png"
      text="Your guests will be amazed when they walk into the marquee and see a double decker bus inside. "
      alt="main"
      frameBgImage="/images/parties/photo-black-and-white@2x.png"
    />
    <Gallery />
  </Layout>
);

export default PartiesPage;

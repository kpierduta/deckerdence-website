import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PartiesHero from '../components/PartiesHero';
import PageHeading from '../components/PageHeading';
import StagesSection from '../components/StagesSection';
import VenueSection from '../components/VenueSection';
import DetailsCardSection from '../components/DetailsCardSection';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';

const Weedings = () => (
  <Layout>
    <Seo title="Parties" />
    <PartiesHero
      title="Unique Wedding Venue"
      partyBgImage="/images/parties/photo@2x.png"
    />
    <PageHeading
      subTitle="Deckerdence is a unique venue idea for Weddings,
      making your day special and truly unique to you. "
    />
    <StagesSection />
    <VenueSection
      flex
      frame="/images/parties/frame@2x.png"
      text="The Wrap around marquee attaches to our our classic vintage bar bus to create
      a unique mobile venue."
      alt="main"
      frameBgImage="/images/parties/photo-black-and-white@2x.png"
    />
    <DetailsCardSection />
    <VenueSection
      color
      frame="/images/parties/rightframes.png"
      text="Your guests will be amazed when they walk into the marquee and see a double decker bus inside. "
      alt="main"
      frameBgImage="/images/parties/photo-black-and-white@2x.png"
    />
    <Gallery />
    <ContactForm />
  </Layout>
);

export default Weedings;

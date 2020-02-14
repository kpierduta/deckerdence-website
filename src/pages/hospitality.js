import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PartiesHero from '../components/PartiesHero';
import PageHeading from '../components/PageHeading';
import StagesSection from '../components/StagesSection';
import VenueSection from '../components/VenueSection';
import DetailsCardSection from '../components/DetailsCardSection';
import GalleryItem from '../components/GalleryItem';
import ContactForm from '../components/ContactForm';
import Festival from '../components/Festival';

const Hospitality = () => (
  <Layout>
    <Seo title="Parties" />
    <PartiesHero
      title="Hospitality"
      partyBgImage="/images/parties/photo@2x.png"
    />
    <PageHeading
      subTitle="Stand out from the crowd and give your clients a day
      they will talk about for years."
    />
    <StagesSection />
    <VenueSection
      flex
      frame="/images/parties/frame@2x.png"
      text="Deckerdence is a superb and unusual venue for your special event."
      alt="main"
      frameBgImage="/images/parties/photo-black-and-white@2x.png"
    />
    <Festival
      title="Our VENUE IS Perfect for..."
      subtitle="...AND can travel anywhere in the UK"
    />
    <VenueSection
      flex
      color
      frame="/images/parties/rightframes.png"
      text="Your guests will be amazed when they walk into the marquee and see a double decker bus inside. "
      alt="main"
      frameBgImage="/images/parties/photo-black-and-white@2x.png"
    />
    <DetailsCardSection />
    <VenueSection
      color
      frame="/images/parties/rightframes.png"
      text="The lower deck of our stunning vintage bus is a traditional bar"
      alt="main"
      frameBgImage="/images/parties/photo-black-and-white@2x.png"
    />
    <GalleryItem />
    <ContactForm />
  </Layout>
);

export default Hospitality;

import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PartiesHero from '../components/PartiesHero';
import PageHeading from '../components/PageHeading';
import StagesSection from '../components/StagesSection';
import VenueSection from '../components/VenueSection';
import DetailsCardSection from '../components/DetailsCardSection';
import GalleryItem from '../components/GalleryItem';
import ContactForm from '../components/ContactForm';
import BlackButton from '../components/elements/BlackButton';

const GalleryWrapper = styled.div`
  margin-top: 4rem;
`;

const Weddings = () => (
  <Layout>
    <Seo title="Weddings" />
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

    <GalleryWrapper className="columns is-variable is-3 is-multiline">
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
    </GalleryWrapper>
    <BlackButton
      image="/images/parties/view-more@2x.png"
      alt="Learn More Button"
      hasWidth="20%"
    />
    <ContactForm />
  </Layout>
);

export default Weddings;

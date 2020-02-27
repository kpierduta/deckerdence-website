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
import BlackButton from '../components/elements/BlackButton';
import ContactForm from '../components/ContactForm';

const GalleryWrapper = styled.div`
  margin-top: 4rem;
`;

const Parties = () => (
  <Layout>
    <Seo title="Parties" />
    <PartiesHero
      title="Parties for all occasions"
      partyBgImage="/images/parties/photo@2x.png"
      ball="/images/parties/disco-ball-copy@2x.png"
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
    <GalleryWrapper className="columns is-variable is-3 is-multiline">
      <GalleryItem
        imageColoured="/images/events/one-black.png"
        imageBw="/images/events/one-colored.png"
        altColour="colored image one"
        altBw="black image one"
      />
      <GalleryItem
        imageColoured="/images/events/second-colored.png"
        imageBw="/images/events/second-black.png"
        altColour="colored image second"
        altBw="black image second"
      />
      <GalleryItem
        imageColoured="/images/events/third-black.png"
        imageBw="/images/events/third-colored.png"
        altColour="colored image third"
        altBw="black image third"
      />
      <GalleryItem
        imageColoured="/images/events/fourth-black.png"
        imageBw="/images/events/fourth-colored.png"
        altColour="colored image fourth"
        altBw="black image fourth"
      />
      <GalleryItem
        imageColoured="/images/events/fifth-black.png"
        imageBw="/images/events/fifth-colored.png"
        altColour="colored image fifth"
        altBw="black image fifth"
      />
      <GalleryItem
        imageColoured="/images/events/sixth-black.png"
        imageBw="/images/events/sixth-colored.png"
        altColour="colored image sixth"
        altBw="black image sixth"
      />
    </GalleryWrapper>
    <BlackButton
      image="/images/parties/view-more@2x.png"
      alt="Learn More Button"
      hasWidth="20%"
    />
    <ContactForm />
  </Layout>
);

export default Parties;

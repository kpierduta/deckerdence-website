import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PartiesHero from '../components/PartiesHero';
import PageHeading from '../components/PageHeading';
import StagesSection from '../components/StagesSection';
import Festival from '../components/Festival';
import DetailsCardSection from '../components/DetailsCardSection';
import HomePageSection from '../components/HomePageSection';
import GalleryItem from '../components/GalleryItem';
import BlackButton from '../components/elements/BlackButton';

const GalleryWrapper = styled.div`
  margin-top: 4rem;
`;

const Event = () => (
  <Layout>
    <Seo title="Event" description="Event Organized by Deckerdence" />
    <PartiesHero
      title="Parties for all occasions"
      partyBgImage="/images/parties/photo@2x.png"
      ball="/images/parties/disco-ball-copy@2x.png"
    />
    <PageHeading title="We can provide everything you need for the ultimate event" />
    <StagesSection title="We can provide everything you need for the ultimate event" />
    <HomePageSection
      flex
      title="Deckerdence is a unique venue that will make your event stand out from the crowd! "
      bgImg="/images/events/middle-bg.png"
      bannerImg="/images/events/frame-1.png"
    />
    <Festival
      title="  OUR VENUE IS PERFCT FOR..."
      subtitle="...AND CAN TRAVEL ANYWHERE IN THE UK"
    />
    <HomePageSection
      title="Deckerdence is a unique venue that will make your event stand out from the crowd! "
      bgImg="/images/events/bottom-bg-2.png"
      bannerImg="/images/events/banner-light.png"
    />
    <DetailsCardSection />
    <HomePageSection
      flex
      title="Deckerdence is a unique venue that will make your event stand out from the crowd! "
      bgImg="/images/events/middle-bg.png"
      bannerImg="/images/events/frame-1.png"
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
      image="/images/view-more-black.png"
      alt="Learn More Button"
      hasWidth="20%"
    />
  </Layout>
);

export default Event;

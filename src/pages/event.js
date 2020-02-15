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
import Button from '../components/elements/Button';

const Section = styled.div`
  margin-top: 5rem;
  .button-styled {
    margin: 2rem 0;
  }
`;
const Event = () => (
  <Layout>
    <Seo title="Event" description="Event Organized by Deckerdence" />
    <PartiesHero
      title="Parties for all occasions"
      partyBgImage="/images/parties/photo@2x.png"
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
    <Section>
      <div className="columns is-multiline">
        <div className="column is-4">
          <img src="/images/events/middle-bg.png" alt="" />
        </div>
        <div className="column is-4">
          <img src="/images/events/middle-bg.png" alt="" />
        </div>
        <div className="column is-4">
          <img src="/images/events/middle-bg.png" alt="" />
        </div>
        <div className="column is-4">
          <img src="/images/events/middle-bg.png" alt="" />
        </div>
        <div className="column is-4">
          <img src="/images/events/middle-bg.png" alt="" />
        </div>
        <div className="column is-4">
          <img src="/images/events/middle-bg.png" alt="" />
        </div>
      </div>
      <div className="has-text-centered button-styled">
        <Button
          image="/images/view-more-black.png"
          alt="Learn More Button"
          hasWidth="20%"
        />
      </div>
    </Section>
  </Layout>
);

export default Event;

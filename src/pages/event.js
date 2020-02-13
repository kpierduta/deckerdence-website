import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PartiesHero from '../components/PartiesHero';
import PageHeading from '../components/PageHeading';
import StagesSection from '../components/StagesSection';
import Festival from '../components/Festival';
import DetailsCardSection from '../components/DetailsCardSection';
import HomePageSection from '../components/HomePageSection';
import EventImages from '../components/EventImages';

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
        <EventImages />
      </Layout>
    );
  }
}

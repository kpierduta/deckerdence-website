import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireHero from '../components/HireHero';
import BlogCategoryItem from '../components/BlogCategoryItem';
import HireForm from '../components/HireForm';
import TileItem from '../components/TileItem';
import Diagram from '../components/Diagram';
import ContactForm from '../components/ContactForm';
import HireCardSlider from '../components/HireCardSlider';

const Section = styled.div`
  background-color: #e2e3e4;
  h1 {
    padding-bottom: 2.5rem;
  }
`;

const HirePage = () => (
  <Layout>
    <Seo title="Deckerdence Hire Page" />
    <HireHero
      Option="Option 1"
      title="Deckerdence Vintage Bus Bar"
      description="BESPOKE DRINKS OPTIONS AVAILABLE"
    />
    <Section className="section">
      <div className="container">
        <h1 className="has-text-centered is-size-1">Categories</h1>
        <div className="columns is-multiline">
          <BlogCategoryItem category="Deckerdence Events" />
          <BlogCategoryItem category="The Deckerdence Journal" />
          <BlogCategoryItem category="Wedding Advice & Tips" />
          <BlogCategoryItem category="Wedding Fairs" />
          <BlogCategoryItem category="Wedding venue" />
        </div>
      </div>
    </Section>
    <HireForm
      para="Deckerdence Bus Bar with the 1/2 wrap-around marquee is a great option for entertaining. Perfect for pitchside hospitality, or a racecourse or polo match. Our team will come along and carry out a site visit to your location, and then we will work with you to ensure you have everything perfect for your event. We have a range of items that furnish Deckerdence perfectly."
      avatar="/images/hire/icon@2x.png"
      email="Email"
      phone="Phone Number"
      buttonName="DOWNLOAD"
      subtitle="By submitting this form you agree to our contact conditions."
      mainSubtitle="mainSubtitle"
    />
    <section className="section">
      <div className="container">
        <div className="columns is-multiline is-variable is-4">
          <TileItem
            title="Marquee information"
            subtitle="The half wrap around marquee measures 25m x 9m and the marquee structure is fitted directly from the bus, between the
            2 decks, to not spoil the upstairs views."
          />
          <TileItem
            title="Marquee information"
            subtitle="The half wrap around marquee measures 25m x 9m and the marquee structure is fitted directly from the bus, between the
            2 decks, to not spoil the upstairs views."
          />
          <TileItem
            title="Marquee information"
            subtitle="The half wrap around marquee measures 25m x 9m and the marquee structure is fitted directly from the bus, between the
            2 decks, to not spoil the upstairs views."
          />
          <TileItem
            title="Marquee information"
            subtitle="The half wrap around marquee measures 25m x 9m and the marquee structure is fitted directly from the bus, between the
            2 decks, to not spoil the upstairs views."
          />
        </div>
      </div>
    </section>
    <Diagram avatar="/images/hire/diagram@2x.png" />
    <ContactForm />
    <HireCardSlider />
  </Layout>
);

export default HirePage;

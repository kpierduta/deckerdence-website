import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireOptions from '../components/HireOptions';
import BlogCategories from '../components/BlogCategories';
import HireForm from '../components/HireForm';
import TileItem from '../components/TileItem';
import Diagram from '../components/Diagram';
import ContactForm from '../components/ContactForm';

const SideAwning = () => (
  <Layout>
    <Seo title="Home" description="Welcome to GatsbyJs v1" />
    <HireOptions
      hireBgImage="/images/hire/header-photo@2x.png"
      title="Option 2"
      middleText="Vintage Bus Bar deckerdence"
      subTitle="with Side Awning"
    />
    <BlogCategories />
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
            subtitle="The awning marquee structure measures 8m x 6m and is fitted
              directly from the bus covering the window of the bar where the
              serving hatch is. As the awning fits directly to the bus
              between decks, the upstairs view is not spoiled. Suspendisse
              varius ligula in molestie lacinia. Maecenas varius eget ligula
              a sagittis. Pellentesque interdum, nisl nec interdum"
          />
          <TileItem
            title="Upstairs Lounge"
            subtitle="Our beautiful upstairs lounge gives you the perfect setting to enjoy drinks with your guests complimented with a panoramic view of your chosen location."
          />
          <TileItem
            title="Upstairs Lounge"
            subtitle="Our beautiful upstairs lounge gives you the perfect setting to enjoy drinks with your guests complimented with a panoramic view of your chosen location."
          />
        </div>
      </div>
    </section>
    <Diagram avatar="/images/hire/diagram@2x.png" />
    <ContactForm />
  </Layout>
);

export default SideAwning;

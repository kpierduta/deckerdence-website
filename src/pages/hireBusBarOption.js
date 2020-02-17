import React from 'react';

import Layout from '../components/Layout';
import HireHero from '../components/HireHero';
import HireForm from '../components/HireForm';
import TileItem from '../components/TileItem';
import BlogCategoryItem from '../components/BlogCategoryItem';
import HireCardSlider from '../components/HireCardSlider';
import Diagram from '../components/Diagram';
import VenueSection from '../components/VenueSection';
import ContactForm from '../components/ContactForm';
import Seo from '../components/Seo';

const HireBusBarOption = () => (
  <Layout>
    <Seo title="Deckerdence Hire Page" />
    <HireHero
      Option="Option 3"
      title="Deckerdence Vintage Bus Bar"
      description="BESPOKE DRINKS OPTIONS AVAILABLE"
    />
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          <BlogCategoryItem category="Vintage Bus Bar" sideImage />
          <BlogCategoryItem category="Fully Customisable" sideImage />
          <BlogCategoryItem category="Cocktail Lounge" sideImage />
          <BlogCategoryItem category="Half Wraparound Marquee" />
        </div>
      </div>
    </section>
    <HireForm
      para="Deckerdence Bus Bar with the 1/2 wrap-around marquee is a great option for entertaining. Perfect for pitchside hospitality, or a racecourse or polo match. Our team will come along and carry out a site visit to your location, and then we will work with you to ensure you have everything perfect for your event. We have a range of items that furnish Deckerdence perfectly."
      avatar="/images/hire/icon@2x.png"
      email="Email"
      phone="Phone Number"
      buttonName="DOWNLOAD"
      subtitle="By submitting this form you agree to our contact conditions."
      mainSubtitle="mainSubtitle"
    />
    <HireCardSlider />
    <section className="section">
      <div className="container">
        <div className="columns is-multiline is-variable is-4">
          <TileItem
            title="Marquee information"
            subtitle="The half wrap around marquee measures 25m x 9m and the marquee structure is fitted directly from the bus, between the
            2 decks, to not spoil the upstairs views."
          />
          <TileItem
            title="Vintage Lounge"
            subtitle="Our vintage lounge consists of a 3 seat sofa,a 2 seat sofa, Chesterfield armchair and wingback chair positioned around a fire place with an electric working fire"
          />
          <TileItem
            title="Hire includes"
            subtitle="Your hire includes: marquee flooring,chandelier lighting, an external generator that provides the power for your event (if required) and fuel for 12 hours running time."
          />
          <TileItem
            title="Compliment your hire"
            subtitle="We have a range of options that you can add to compliment your hire. One such item is our chequered black and white dance floor measures 5m x 5m and is lit up by our disco and effect lighting"
          />
        </div>
      </div>
    </section>
    <Diagram avatar="/images/hire/bus-diagram.png" />
    <VenueSection
      color
      frame="/images/parties/frame@2x.png"
      text="Cocktail Lounge Upstairs in Vintage bus bar "
      alt="main"
      frameBgImage="/images/hire/hire-bg-one.png"
    />
    <VenueSection
      flex
      frame="/images/parties/frame@2x.png"
      text="Plan every Detail with expert support"
      alt="main"
      frameBgImage="/images/hire/hire-bg-second.png"
    />
    <VenueSection
      color
      frame="/images/parties/rightframes.png"
      text="Create Your Theme Fully Customisable"
      frameBgImage="/images/parties/photo-black-and-white@2x.png"
    />
    <ContactForm />
  </Layout>
);

export default HireBusBarOption;

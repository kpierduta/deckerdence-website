import React from 'react';

import {
  Hero,
  AnnouncementBanner,
  Features,
  BookCall,
  EventDescription,
  Testimonials,
  KeyInformation,
  GalleryImages,
  GalleryInfo,
  InfoSteps,
} from '../components/NewComponents';
import Layout from '../components/Layout';

const Test = () => (
  <Layout>
    <Hero bgImg="/images/new/hero-img.png" />
    <AnnouncementBanner
      title="WELCOME TO DECKERDENCE"
      subTitle="UNIQUE MOBILE VENUE"
    />
    <Features />
    <BookCall text="Book a call with us" />
    <Hero bgImg="/images/new/bg1.png" />
    <EventDescription />
    <Testimonials />
    <Hero bgImg="/images/new/hero-img.png" />
    <KeyInformation />
    <Hero bgImg="/images/new/love.png" />
    <Testimonials flex />
    <AnnouncementBanner
      title="DECKERDENCE FEATURES"
      subTitle="DECKERDENCE VINTAGE BUS BAR"
    />
    <GalleryImages />
    <GalleryInfo />
    <GalleryImages />
    <GalleryInfo hasDarkBg />
    <GalleryImages />
    <GalleryInfo />
    <Hero bgImg="/images/new/wedding.png" />
    <GalleryInfo />
    <BookCall text="Book a call with us" />
    <Testimonials />
    <Testimonials flex />
    <Hero bgImg="/images/new/hero-img.png" />
    <InfoSteps />
    <BookCall text="Hire Options" />

    <BookCall text="Book a call with us" />
  </Layout>
);

export default Test;

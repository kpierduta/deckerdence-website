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
    <BookCall />
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
    <BookCall />
  </Layout>
);

export default Test;

import React from 'react';

import {
  Hero,
  WelcomeBanner,
  Features,
  BookCall,
  EventDescription,
  Testimonials,
} from '../components/NewComponents';
import Layout from '../components/Layout';

const Test = () => (
  <Layout>
    <Hero bgImg="/images/new/hero-img.png" />
    <WelcomeBanner />
    <Features />
    <BookCall />
    <Hero bgImg="/images/new/bg1.png" />
    <EventDescription />
    <Testimonials />
  </Layout>
);

export default Test;

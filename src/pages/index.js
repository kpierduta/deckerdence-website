import React from 'react';
import { graphql } from 'gatsby';

import {
  Banner,
  AnnouncementBanner,
  Features,
  BookCall,
  EventDescription,
  Testimonials,
  KeyInformation,
  GalleryImages,
  GalleryInfo,
  InfoSteps,
} from '../components/newComponents1';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import StagesSection from '../components/StagesSection';

export const homeQuery = graphql`
  query homepage {
    sanitySiteSettings {
      homeSeoTitle
      homeSeoKeywords
      homeSeoMetaDescription
      homeHeroBackgroundImage {
        asset {
          url
        }
      }

      email
      telephone
      homeFeatures {
        items {
          animations
          _key
          buttonLink {
            current
          }
          hasRight
          title
          description
          featuresBackgroundImage {
            asset {
              url
            }
          }
          featuresFrameImage {
            asset {
              url
            }
          }
        }
      }
      simpleStages {
        mainHeading
        item {
          _key
          title
          subTitle
          buttonLink {
            current
          }
          avatar {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const Homepage = ({ data }) => {
  const settings = data.sanitySiteSettings;
  return (
    <Layout>
      <Banner bgImg="/images/new/hero-img.png" />
      <AnnouncementBanner
        title="WELCOME TO DECKERDENCE"
        subTitle="UNIQUE MOBILE VENUE"
      />
      <Features />
      <BookCall text="Book a call with us" />
      <Banner bgImg="/images/new/bg1.png" />
      <EventDescription />
      <Testimonials />
      <Banner bgImg="/images/new/hero-img.png" />
      <KeyInformation />
      <Banner bgImg="/images/new/love.png" />
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
      <Banner bgImg="/images/new/wedding.png" />
      <GalleryInfo />
      <BookCall text="Book a call with us" />
      <Testimonials />
      <Testimonials flex />
      <Banner bgImg="/images/new/hero-img.png" />
      <InfoSteps />
      <Contact />
      <BookCall text="Hire Options" bgDark />
      <StagesSection data={settings} />
      <BookCall text="Book a call with us" />
    </Layout>
  );
};

export default Homepage;

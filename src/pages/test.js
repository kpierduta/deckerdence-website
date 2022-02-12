import React from 'react';
import { graphql } from 'gatsby';

import {
  KeyInformation,
  GalleryImages,
  GalleryInfo,
} from '../components/newComponents';
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
              id
              gatsbyImageData
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
      {/* <Banner bgImg="/images/new/hero-img.png" /> */}

      {/* <Banner bgImg="/images/new/bg1.png" /> */}
      {/* <Banner bgImg="/images/new/hero-img.png" /> */}
      <KeyInformation />
      {/* <Banner bgImg="/images/new/love.png" /> */}
      {/* <WelcomeHeading
        title="DECKERDENCE FEATURES"
        subTitle="DECKERDENCE VINTAGE BUS BAR"
      /> */}
      <GalleryImages />
      <GalleryInfo />
      <GalleryImages />
      <GalleryInfo hasDarkBg />
      <GalleryImages />
      <GalleryInfo />
      {/* <Banner bgImg="/images/new/wedding.png" /> */}
      <GalleryInfo />
      {/* <Banner bgImg="/images/new/hero-img.png" /> */}
      <Contact />
      <StagesSection data={settings} />
    </Layout>
  );
};

export default Homepage;

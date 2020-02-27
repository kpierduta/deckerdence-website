import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import HomePageSection from '../components/HomePageSection';

export const homeQuery = graphql`
  query homepage {
    sanitySiteSettings {
      homeHeroBackgroundImage {
        asset {
          url
        }
      }
      homeHeroBannerImage {
        asset {
          url
        }
      }
      email
      telephone
      homeFeatures {
        items {
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
    }
  }
`;

const Index = ({ data }) => {
  const settings = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo title="Home" description="Deckerdence Unique Mobile Venue" />
      <HomeHero items={settings} />
      {settings.homeFeatures.items.map(items => (
        <HomePageSection
          flex={items.hasRight}
          button
          title={items.title}
          description={items.description}
          bgImg={items.featuresBackgroundImage.asset.url}
          bannerImg={items.featuresFrameImage.asset.url}
        />
      ))}
    </Layout>
  );
};

export default Index;

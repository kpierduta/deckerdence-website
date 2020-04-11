import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import HomePageSection from '../components/HomePageSection';

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
      homeHeroBannerImage {
        asset {
          url
        }
      }
      email
      telephone
      _id
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
      <Seo
        title={settings.homeSeoTitle}
        description={settings.homeSeoMetaDescription}
        keywords={settings.homeSeoKeywords}
      />
      <HomeHero items={settings} />
      {settings.homeFeatures.items.map(items => (
        <HomePageSection
          key={items.id}
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

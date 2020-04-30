import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import HomePageSection from '../components/HomePageSection';
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
      homeHeroBannerImage {
        asset {
          url
        }
      }
      email
      telephone
      homeFeatures {
        items {
          _key
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
          avatar {
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
          key={items._key}
          flex={items.hasRight}
          button
          title={items.title}
          description={items.description}
          bgImg={items.featuresBackgroundImage.asset.url}
          bannerImg={items.featuresFrameImage.asset.url}
        />
      ))}
      <StagesSection data={settings} />
    </Layout>
  );
};

export default Index;

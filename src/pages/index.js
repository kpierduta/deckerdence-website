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
          buttonLink={items.buttonLink.current}
          title={items.title}
          description={items.description}
          bgImg={items.featuresBackgroundImage.asset.url}
          bannerImg={items.featuresFrameImage.asset.url}
          animations={items.animations}
        />
      ))}
      <StagesSection data={settings} />
    </Layout>
  );
};

export default Index;

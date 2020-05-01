import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PartiesHero from '../components/PartiesHero';
import HireOptionTestimonial from '../components/HireOptionTestimonial';

export const aboutPageQuery = graphql`
  query myAbout {
    sanitySiteSettings {
      aboutPage {
        seoTitle
        seoKeywords
        seoMetaDescription
        slug {
          current
        }
        mainHeading
        middleText
        subtitle
        backgroundImage {
          asset {
            url
          }
        }
        information {
          asset {
            url
          }
          _key
          alt
          columnReverse
          title
          subtitle
          description
        }
      }
    }
  }
`;

const AboutPage = ({ data }) => {
  const options = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo
        title={options.aboutPage.seoTitle}
        description={options.aboutPage.seoKeywords}
        keywords={options.aboutPage.seoMetaDescription}
      />
      <PartiesHero
        title={options.aboutPage.mainHeading}
        partyBgImage={options.aboutPage.backgroundImage.asset.url}
      />
      {options.aboutPage.information.map(option => (
        <HireOptionTestimonial
          key={option._key}
          image={option.asset.url}
          flex={option.columnReverse}
          title={option.title}
          position={option.subtitle}
          pera={option.description}
          alt={option.alt}
          name={option.name}
          date={option.date}
        />
      ))}
    </Layout>
  );
};

export default AboutPage;

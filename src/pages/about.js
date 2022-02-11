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
        backgroundImage {
          asset {
            url
          }
        }
      }
    }
    allSanityTeam(sort: { fields: order, order: ASC }) {
      edges {
        node {
          _id
          order
          columnReverse
          image {
            asset {
              id
              gatsbyImageData
            }
          }
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
  const team = data.allSanityTeam.edges;
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
      {team.map(option => (
        <HireOptionTestimonial
          key={option.node._id}
          image={option.node.image.asset.gatsbyImageData}
          flex={option.node.columnReverse}
          title={option.node.title}
          position={option.node.subtitle}
          pera={option.node.description}
        />
      ))}
    </Layout>
  );
};

export default AboutPage;

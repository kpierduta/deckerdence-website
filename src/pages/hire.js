import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireOptionHero from '../components/HireOptionHero';
import HireOptionItem from '../components/HireOptionItem';

export const hireQuery = graphql`
  query hire {
    sanitySiteSettings {
      hireOptionSeoTitle
      hireOptionSeoKeywords
      hireOptionSeoMetaDescription
      hireOptionSmallText
      hireOptionLargeText
      hireOptionDescription
      hireOptionBackgroundImage {
        asset {
          url
        }
      }
    }
    allSanityVehicleHirePage(sort: { fields: order }) {
      edges {
        node {
          order
          slug {
            current
          }
          _id
          columnReverse
          hireOptionTitle
          hireOptionSubtitle
          hireOptionDescription
          hireOptionPrice
          hireOptionBlackImage {
            asset {
              id
              gatsbyImageData
            }
          }
          hireOptionColoredImage {
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

const HirePage = ({ data }) => {
  const hire = data.sanitySiteSettings;
  const hireOptions = data.allSanityVehicleHirePage.edges;
  return (
    <Layout>
      <Seo
        title={hire.hireOptionSeoTitle}
        description={hire.hireOptionSeoMetaDescription}
        keywords={hire.hireOptionSeoKeywords}
      />
      <HireOptionHero
        bgImage={hire.hireOptionBackgroundImage.asset.url}
        frame="/images/hire/optionFrame.png"
        smallText={hire.hireOptionSmallText}
        largeText={hire.hireOptionLargeText}
        description={hire.hireOptionDescription}
      />
      {hireOptions.map((items, i) => (
        <HireOptionItem
          item={items.node}
          key={items.node._id}
          flex={i % 2 === 0}
        />
      ))}
    </Layout>
  );
};

export default HirePage;

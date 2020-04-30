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
              url
            }
          }
          hireOptionColoredImage {
            asset {
              url
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
      {hireOptions.map(items => (
        <HireOptionItem item={items.node} key={items.node._id} />
      ))}
    </Layout>
  );
};

export default HirePage;

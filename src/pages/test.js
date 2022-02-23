import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import HireInfoTable from '../components/table/HireInfoTable';
import StatsTable from '../components/table/StatsTable';

export const hireTestQuery = graphql`
  query hireTest {
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

const Homepage = () => {
  return (
    <Layout>
      <HireInfoTable />
      <StatsTable />
    </Layout>
  );
};

export default Homepage;

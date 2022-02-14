import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Contact from '../components/Contact';
import HireOptionHero from '../components/HireOptionHero';
import HireInfoTable from '../components/HireInfoTable';
import StatsTable from '../components/StatsTable';

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

const Homepage = ({ data }) => {
  const hire = data.sanitySiteSettings;
  return (
    <Layout>
      <HireOptionHero
        bgImage={hire.hireOptionBackgroundImage.asset.url}
        frame="/images/hire/optionFrame.png"
        smallText={hire.hireOptionSmallText}
        largeText={hire.hireOptionLargeText}
        description={hire.hireOptionDescription}
      />
      <HireInfoTable />
      <StatsTable />
      {/* <Banner bgImg="/images/new/hero-img.png" /> */}
      <Contact />
      {/* <StagesSection data={settings} /> */}
    </Layout>
  );
};

export default Homepage;

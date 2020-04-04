import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireOptionItem from '../components/HireOptionItem';

const Section = styled.section`
  background-image: url(${props => props.bgimage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .column {
    background-image: url(${props => props.frame});
    background-repeat: no-repeat;
    background-position: cover;
    background-size: 100% 100%;
    padding: 5rem 2rem 4rem 2rem;
    justify-content: space-between;
  }
`;

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
      hireOptionFrameImage {
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
      <Section
        className="hero is-medium"
        bgimage={hire.hireOptionBackgroundImage.asset.url}
        frame={hire.hireOptionFrameImage.asset.url}
      >
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-9 has-text-centered">
                <h1 className="title is-4 has-text-white has-text-weight-normal">
                  {hire.hireOptionSmallText}
                </h1>
                <h1 className="title is-3 has-text-white has-text-weight-semibold">
                  {hire.hireOptionLargeText}
                </h1>
                <img src="/images/hire/decorative-line.png" alt="" />
                <h1 className="subtitle is-5 has-text-white">
                  {hire.hireOptionDescription}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {hireOptions.map(items => (
        <HireOptionItem item={items.node} />
      ))}
    </Layout>
  );
};

export default HirePage;

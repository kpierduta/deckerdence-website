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
    padding: 5rem;
    justify-content: space-between;
  }
  .title.is-1 {
    font-size: 4rem;
  }
`;

export const hireQuery = graphql`
  query hire {
    sanitySiteSettings {
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
  }
`;

const HirePage = ({ data }) => {
  const hire = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo title="Hire" description="Get Hire Deckerdence" />
      <Section
        className="hero is-medium"
        bgimage={hire.hireOptionBackgroundImage.asset.url}
        frame={hire.hireOptionFrameImage.asset.url}
      >
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-9 has-text-centered">
                <h1 className="title is-2 has-text-white has-text-weight-normal">
                  {hire.hireOptionSmallText}
                </h1>
                <h1 className="title is-1 has-text-white has-text-weight-semibold	">
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
      <HireOptionItem
        imageColoured="/images/hire/bus.png"
        imageBw="/images/hire/bus-house.png"
        option="Hire Option 1"
        title="Vintage Bus Bar"
        description="You can hire our fabulous vintage bus bar
        to give your event a stand out bar."
        price="£500.00"
      />
      <HireOptionItem
        flex
        imageColoured="/images/hire/bus.png"
        imageBw="/images/hire/bus-house.png"
        option="Hire Option 2"
        title="Vintage bus bar with SIDE awning"
        description="You can hire Deckerdence with an awning,
      giving you shade in the sunshine or some cover
      in unpredictable weather conditions."
        price="£1000.00"
      />
      <HireOptionItem
        imageColoured="/images/hire/bus.png"
        imageBw="/images/hire/bus-house.png"
        option="Hire Option 3"
        title="Vintage Bus Bar with ½ Marquee"
        description="You can hire our fabulous vintage Deckerdence Bus Bar with 1/2 marquee for your occasion to create a memorable experience. Set up is required prior to your event."
        price="£5000.00"
      />
      <HireOptionItem
        flex
        imageColoured="/images/hire/bus.png"
        imageBw="/images/hire/bus-house.png"
        option="Hire Option 4"
        title="Deckerdence full Marquee venue"
        description="You can hire Deckerdence with the full
        wrap around marquee & additional
        marquee structures can be attached
        for more space if needed."
        price="£5952.00"
      />
    </Layout>
  );
};

export default HirePage;

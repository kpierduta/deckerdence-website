import React from 'react';
import { graphql, Link } from 'gatsby';

import styled from 'styled-components';
import ButtonGlobal from '../components/elements/ButtonGlobal';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';

const Section = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  .column {
    background-image: url(/images/towbar/frame@2x.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 500px;
    justify-content: center;
    display: grid;
    padding: 3rem 12rem;
    /* margin-top: 0.5rem !important; */
    @media screen and (max-width: 768px) {
      padding: 0rem 3rem;
    }
  }
  .wrapper {
    padding: 9rem 0rem 9rem 0rem;
  }
`;

const Columns = styled.div`
  margin-top: 1rem;
  .column {
    margin-top: -1rem;
  }
  img {
    filter: gray;
    filter: grayscale(1);
    transition: all 0.8s ease-in-out;
  }

  img:hover {
    filter: none;
    filter: grayscale(0);
  }
`;

export const towBarQuery = graphql`
  query towBar {
    sanitySiteSettings {
      towBarSeoTitle
      towBarSeoKeywords
      towBarSeoMetaDescription
      towBarSlug {
        current
      }
      towBarMainTitle
      towBarMainSubtitle
      towBarFrameTitle
      towBarFrameSubtitle
      towBarFrameDescription
      towBarBackgroundImage {
        asset {
          url
        }
      }
      towBarGallery {
        alt
        asset {
          url
        }
      }
    }
  }
`;
const TowBarPage = ({ data }) => {
  const page = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo
        title={page.towBarSeoTitle}
        description={page.towBarSeoMetaDescription}
        keywords={page.towBarSeoKeywords}
      />
      <PageHeading
        title={page.towBarMainTitle}
        subTitle={page.towBarMainSubtitle}
      />
      <Section
        className="section is-large"
        bgImage={page.towBarBackgroundImage.asset.url}
      >
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-9-desktop  ">
              <div className="wrapper">
                <h1 className="subtitle is-5 has-text-centered has-text-white">
                  {page.towBarFrameTitle}
                </h1>
                <h1 className="title is-4 is-size-6-touch is-uppercase has-text-centered has-text-white">
                  {page.towBarFrameSubtitle}
                </h1>
                <p className="subtitle is-6 has-text-centered has-text-white">
                  {page.towBarFrameDescription}
                </p>
                <div className="has-text-centered button-wrapper">
                  <Link to="/contact">
                    <ButtonGlobal title="Enquire Today" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Columns className="columns is-multiline is-variable is-1">
        {page.towBarGallery.map(items => (
          <div className="column is-6">
            <figure className="image is-5by4">
              <img src={items.asset.url} alt={items.alt} />
            </figure>
          </div>
        ))}
      </Columns>
    </Layout>
  );
};

export default TowBarPage;

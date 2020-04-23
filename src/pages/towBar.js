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
  margin-block-end: auto !important;
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
  query {
    sanitySiteSettings {
      towBarSeoTitle
      towBarSeoKeywords
      towBarSeoMetaDescription
      towBarMainTitle
      towBarMainSubtitle
      towBarPage {
        towBarContent {
          towBarSlug {
            current
          }
          towBarTitle
          towBarSubtitle
          _key
          towBarDescription
          towBarBackgroundImage {
            asset {
              url
            }
          }
          towBarGallery {
            asset {
              url
            }
            alt
          }
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
      {page.towBarPage.towBarContent.map(items => (
        <div>
          <Section
            className="section is-large"
            bgImage={items.towBarBackgroundImage.asset.url}
          >
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-9-desktop  ">
                  <div className="wrapper">
                    <h1 className="subtitle is-5 has-text-centered has-text-white">
                      {items.towBarTitle}
                    </h1>
                    <h1 className="title is-4 is-size-6-touch is-uppercase has-text-centered has-text-white">
                      {items.towBarSubtitle}
                    </h1>
                    <p className="subtitle is-6 has-text-centered has-text-white">
                      {items.towBarDescription}
                    </p>
                    <div className="has-text-centered button-wrapper">
                      <Link to={items.towBarSlug.current}>
                        <ButtonGlobal title="Enquire Today" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
          <Columns className="columns is-multiline is-variable is-1">
            {items.towBarGallery.map(item => (
              <div className="column is-6">
                <figure className="image is-5by4">
                  <img src={item.asset.url} alt={item.alt} />
                </figure>
              </div>
            ))}
          </Columns>
        </div>
      ))}
    </Layout>
  );
};

export default TowBarPage;

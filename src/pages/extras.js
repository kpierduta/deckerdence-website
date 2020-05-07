import React from 'react';
import { graphql, Link } from 'gatsby';

import styled from 'styled-components';
import ButtonGlobal from '../components/elements/ButtonGlobal';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';

const Section = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: 100% 100%;
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
    transition: all 0.5s ease-in-out;
  }

  img:hover {
    filter: none;
    filter: grayscale(0);
  }
`;

export const externalQuery = graphql`
  query {
    sanitySiteSettings {
      extrasPage {
        _key
        seoTitle
        seoKeywords
        seoMetaDescription
        mainTitle
        mainSubtitle
        extrasContent {
          _key
          slug {
            current
          }
          title
          subtitle
          description
          backgroundImage {
            asset {
              url
            }
          }
          gallery {
            alt
            _key
            alt
            asset {
              url
            }
          }
        }
      }
    }
  }
`;
const ExtraPage = ({ data }) => {
  const page = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo
        title={page.extrasPage.seoTitle}
        description={page.extrasPage.seoMetaDescription}
        keywords={page.extrasPage.seoKeywords}
      />
      <PageHeading
        title={page.extrasPage.mainTitle}
        subTitle={page.extrasPage.mainSubtitle}
      />
      {page.extrasPage.extrasContent.map(items => (
        <div>
          <Section
            className="section hero is-fullheight-withnavbar"
            bgImage={items.backgroundImage.asset.url}
          >
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-9-desktop  ">
                  <div className="wrapper">
                    <h1 className="subtitle is-5 has-text-centered has-text-white">
                      {items.title}
                    </h1>
                    <h1 className="title is-4 is-size-6-touch is-uppercase has-text-centered has-text-white">
                      {items.subtitle}
                    </h1>
                    <p className="subtitle is-6 has-text-centered has-text-white">
                      {items.description}
                    </p>
                    <div className="has-text-centered button-wrapper">
                      <Link to={items.slug.current}>
                        <ButtonGlobal title="Enquire Today" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
          <Columns className="columns is-multiline is-variable is-1">
            {items.gallery.map(item => (
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

export default ExtraPage;

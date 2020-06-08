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
  .columns {
    justify-content: ${props => (props.flex ? 'flex-end' : 'flex-start')};
  }
  .column {
    background-image: url(/images/towbar/frame@2x.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 500px;
    justify-content: center;
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
  :last-child {
    margin-bottom: 1rem !important;
  }

  margin-top: 1rem !important;

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
          itemRight
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
            className="section hero is-medium is-block"
            bgImage={items.backgroundImage.asset.url}
            flex={items.itemRight}
          >
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-8">
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
          <Columns className="columns is-multiline">
            {items.gallery.map(item => (
              <div className="column is-6">
                <figure className="image is-5by4">
                  {item.asset.url && (
                    <img src={item.asset.url} alt={item.alt} />
                  )}
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

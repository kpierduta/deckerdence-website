import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import BlockContent from '@sanity/block-content-to-react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Section = styled.section`
  padding: 1rem 1.5rem 0.25rem 1.5rem;
  background: ${props => props.theme.mainBrandColor};
  .hero-body {
    padding: 3rem 0rem;
  }
`;

const Content = styled.div`
  padding: 1.5rem 1.5rem !important;
  h1,
  h2,
  h3,
  h4 {
    margin-top: 2.5rem;
    font-family: ${props => props.theme.secondaryFontFamily};
    font-weight: 300;
    line-height: 36px;
    :first-child {
      margin-top: 1rem;
    }
  }
  p {
    display: block;
    margin-top: 1rem;
  }
  h2 {
    font-size: 24px;
  }
  h3 {
    font-size: 20px;
  }
  h4 {
    font-size: 17px;
  }
  a {
    margin-top: 1rem;
    color: ${props => props.theme.mainBrandColor};
  }
  ul {
    list-style: initial;
  }
  b {
    font-weight: 600;
    margin: 1rem 0;
  }
  i {
    font-style: italic;
  }
`;

export const agreementQuery = graphql`
  query terms($slug: String) {
    sanityAgreement(slug: { current: { eq: $slug } }) {
      seoTitle
      seoKeywords
      seoMetaDescription
      slug {
        current
      }
      title
      subtitle
      _rawMyRichText
    }
  }
`;

const Agreements = ({ data }) => {
  const page = data.sanityAgreement;

  return (
    <Layout>
      <Seo
        title={page.seoTitle}
        description={page.seoMetaDescription}
        keywords={page.seoKeywords}
      />
      <Section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <section className="hero">
                <div className="hero-body has-text-centered-mobile">
                  <h1 className="title is-size-3-mobile has-text-weight-light is-uppercase has-text-white">
                    {page.title}
                  </h1>
                  <p className="has-text-white">{page.subtitle}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Section>
      <div>
        <Content className="section">
          <div className="container">
            <BlockContent blocks={page._rawMyRichText} />
          </div>
        </Content>
      </div>
    </Layout>
  );
};

export default Agreements;

import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import BlogData from '../components/BlogData';

const Section = styled.section`
  .column {
    display: flex;
  }
`;

export const blogQuery = graphql`
  query blog {
    sanitySiteSettings {
      blogSeoTitle
      blogSeoKeywords
      blogSeoMetaDescription
      blogBarMainTitle
      blogs {
        items {
          isSizeHalf
          title
          subtitle
          image {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

const BlogPage = ({ data }) => {
  const page = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo
        title="Blog"
        description="Deckerdence Blog"
        keywords="Deckerdence Blog"
      />
      <PageHeading title="BLOG" />
      <Section className="section">
        <div className="columns is-multiline">
          {page.blogs.items.map(items => (
            <div
              className={
                items.isSizeHalf ? 'column is-6 is-flex' : 'column is-3 is-flex'
              }
            >
              <BlogData
                color
                title={items.title}
                subtitle={items.subtitle}
                boxImage={items.image.asset.url}
              />
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default BlogPage;

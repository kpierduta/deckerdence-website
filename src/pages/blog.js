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
      blogMainTitle
      blogs {
        items {
          isSizeHalf
          hasTextBlack
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
        title={page.blogSeoTitle}
        description={page.blogSeoMetaDescription}
        keywords={page.blogSeoKeywords}
      />
      <PageHeading title={page.blogMainTitle} />
      <Section className="section">
        <div className="columns is-multiline">
          {page.blogs.items.map(items => (
            <div
              className={
                items.isSizeHalf ? 'column is-6 is-flex' : 'column is-3 is-flex'
              }
            >
              <BlogData
                color={items.hasTextBlack}
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

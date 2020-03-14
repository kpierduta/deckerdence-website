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
    }
    allSanityBlogPage(sort: { fields: order }) {
      edges {
        node {
          order
          isSizeHalf
          hasTextBlack
          title
          slug {
            current
          }
          releaseDate(formatString: "DD-MM-YYYY")
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
  const blog = data.allSanityBlogPage.edges;
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
          {blog.map(items => (
            <div
              className={
                items.node.isSizeHalf
                  ? 'column is-6 is-flex'
                  : 'column is-3 is-flex'
              }
            >
              <BlogData
                color={items.node.hasTextBlack}
                title={items.node.title}
                date={items.node.releaseDate}
                boxImage={items.node.image.asset.url}
                link={`/blog/${items.node.slug.current}`}
              />
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default BlogPage;

import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import BlogCategoryItem from '../components/BlogCategoryItem';
import BlogData from '../components/BlogData';

const Section = styled.section`
  .column {
    display: flex;
  }
`;

const Wrapper = styled.div`
  background-color: #e2e3e4;
  h1 {
    padding-bottom: 2rem;
  }
`;

export const blogQuery = graphql`
  query blog {
    sanitySiteSettings {
      blogSeoTitle
      blogSeoKeywords
      blogSeoMetaDescription
      blogMainTitle
      blogCatagoriesHeading
      Catagories
    }
    allSanityBlogPage(sort: { fields: order }) {
      edges {
        node {
          _id
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
      <Wrapper className="section">
        <div className="container">
          <h1 className="title is-4 has-text-centered">
            {page.blogCatagoriesHeading}
          </h1>
          <div className="columns is-multiline">
            {page.Catagories.map(options => (
              <BlogCategoryItem category={options} />
            ))}
          </div>
        </div>
      </Wrapper>
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
                key={items.node._id}
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

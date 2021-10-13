import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import BlogCategory from '../components/BlogCategory';
import BlogData from '../components/BlogData';
import CalendarSlider from '../components/CalendarSlider';

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
    allSanityBlogPage(sort: { fields: releaseDate, order: DESC }) {
      edges {
        node {
          _id
          isSizeHalf
          hasTextBlack
          title
          categorySet
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
  const [category, setCategory] = useState('ALL CATEGORIES');
  const page = data.sanitySiteSettings;
  const blog = data.allSanityBlogPage.edges;

  console.log(category, 'data');

  return (
    <Layout>
      <Seo
        title={page.blogSeoTitle}
        description={page.blogSeoMetaDescription}
        keywords={page.blogSeoKeywords}
      />
      <PageHeading title={page.blogMainTitle} />
      <BlogCategory categoryChange={setCategory} />
      <Section className="section">
        <div className="columns is-multiline">
          {blog.map(items => {
            if (
              category === 'ALL CATEGORIES' ||
              items.node.categorySet == category
            ) {
              return (
                <div
                  key={items.node._id}
                  className={
                    items.node.isSizeHalf
                      ? 'column is-6 is-flex'
                      : 'column is-3 is-flex'
                  }>
                  <BlogData
                    color={items.node.hasTextBlack}
                    title={items.node.title}
                    date={items.node.releaseDate}
                    boxImage={items.node.image.asset.url}
                    link={`/blog/${items.node.slug.current}`}
                  />
                </div>
              );
            }
          })}
        </div>
      </Section>
      <CalendarSlider />
    </Layout>
  );
};

export default BlogPage;

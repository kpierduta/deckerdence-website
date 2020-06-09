import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireOptions from '../components/HireOptions';
import BlogCategoryItem from '../components/BlogCategoryItem';
import BlogArticleItem from '../components/BlogArticleItem';
import CalendarSlider from '../components/CalendarSlider';

export const blogArticleQuery = graphql`
  query blogArticle($slug: String) {
    sanityBlogPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      hasTextBlack
      blogArticleSeoTitle
      blogArticleSeoKeywords
      blogArticleSeoMetaDescription
      releaseDate(formatString: "DD-MM-YYYY")
      title
      categorySet
      image {
        asset {
          url
        }
      }
      content {
        _key
        title
        body
      }
      blogArticleCategoriesHeading
      blogArticleCategories
    }
  }
`;

const BlogsWrapper = styled.div`
  margin-top: 3rem;
`;

const Section = styled.div`
  background-color: #e2e3e4;
  h1 {
    padding-bottom: 2rem;
  }
`;

const Wrapper = styled.div`
  .section.is-large {
    @media screen and (min-width: 1024px) {
      padding: 12rem 1.5rem !important;
      background-size: 100% 100%;
    }
    @media screen and (max-width: 768px) {
      background-size: 100% 100%;
    }
  }
`;

const BlogArticle = ({ data }) => {
  const page = data.sanityBlogPage;

  return (
    <Layout>
      <Seo
        title={page.blogArticleSeoTitle}
        keywords={page.blogArticleSeoKeywords}
        description={page.blogArticleSeoMetaDescription}
      />
      <Wrapper>
        <HireOptions
          color={page.hasTextBlack}
          title={page.releaseDate}
          middleText={page.title}
          subTitle={page.categorySet}
          hireBgImage={page.image.asset.url}
        />
      </Wrapper>
      <Section className="section">
        <div className="container">
          <h1 className="title is-4 has-text-centered">
            {page.blogArticleCategoriesHeading}
          </h1>
          <div className="columns is-multiline">
            {page.blogArticleCategories.map(options => (
              <BlogCategoryItem category={options} />
            ))}
          </div>
        </div>
      </Section>
      <BlogsWrapper>
        {page.content.map(options => (
          <BlogArticleItem
            title={options.title}
            subtitle={options.body}
            key={options._key}
          />
        ))}
      </BlogsWrapper>
      <CalendarSlider />
    </Layout>
  );
};

export default BlogArticle;

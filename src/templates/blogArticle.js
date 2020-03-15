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
      blogArticleSeoTitle
      blogArticleSeoKeywords
      blogArticleSeoMetaDescription
      blogArticleTitle(formatString: "DD-MM-YYYY")
      blogArticleMiddleText
      blogArticleSubtitle
      blogArticleHomeHeroImage {
        asset {
          url
        }
      }
      blogArticleCategoriesHeading
      blogArticleCategories
      blogArticleSliderHeading
      blogArticleSliderItems {
        asset {
          url
        }
      }
    }
  }
`;

const BlogsWrapper = styled.div`
  margin-top: 3rem;
`;
const Section = styled.div`
  background-color: #e2e3e4;
  h1 {
    padding-bottom: 2.5rem;
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
      <HireOptions
        title={page.blogArticleTitle}
        middleText={page.blogArticleMiddleText}
        subTitle={page.blogArticleSubtitle}
        hireBgImage={page.blogArticleHomeHeroImage.asset.url}
        textColor={props => props.theme.darkShades}
      />
      <Section className="section">
        <div className="container">
          <h1 className="has-text-centered is-size-1">
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
        <BlogArticleItem
          title="1. Not just a venue service"
          subtitle="When you hire Deckerdence for your venue, you don’t simply get a venue. An event to us isn’t just about the location and the space you have, it’s about the experience you have at the start of the event when you arrive right through to the very end when everyone is leaving. We plan all the details right from where to park to tidying away at the end.  Your on-site team make sure that Deckerdence is gleaming, neat and tidy throughout, everyone is safe, the sound system sounds amazing, the light up dance floor is working and that your cocktails never run out."
        />
        <BlogArticleItem
          title="2. Experienced event team"
          subtitle="When you work with us you get the expert help and guidance of a team of people that have worked on events across the UK with a wide range of people and companies, including ITV, Slimming World, Breast Cancer Care + much more. Whether you hire us for a corporate event or for a wedding, we cover every aspect of your event in microscopic detail."
        />
        <BlogArticleItem
          title="3. Bespoke cocktail service"
          subtitle="When you hire Deckerdence for your venue, you don’t simply get a venue. An event to us isn’t just about the location and the space you have, it’s about the experience you have at the start of the event when you arrive right through to the very end when everyone is leaving. We plan all the details right from where to park to tidying away at the end.  Your on-site team make sure that Deckerdence is gleaming, neat and tidy throughout, everyone is safe, the sound system sounds amazing, the light up dance floor is working and that your cocktails never run out."
        />
        <BlogArticleItem
          title="4. Not just a venue service"
          subtitle="When you hire Deckerdence for your venue, you don’t simply get a venue. An event to us isn’t just about the location and the space you have, it’s about the experience you have at the start of the event when you arrive right through to the very end when everyone is leaving. We plan all the details right from where to park to tidying away at the end.  Your on-site team make sure that Deckerdence is gleaming, neat and tidy throughout, everyone is safe, the sound system sounds amazing, the light up dance floor is working and that your cocktails never run out."
        />
      </BlogsWrapper>
      <CalendarSlider data={page} />
    </Layout>
  );
};

export default BlogArticle;

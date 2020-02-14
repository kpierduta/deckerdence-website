import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireOptions from '../components/HireOptions';
import BlogCategoryItem from '../components/BlogCategoryItem';
import BlogArticleItem from '../components/BlogArticleItem';
import CalendarSlider from '../components/CalendarSlider';

const BlogsWrapper = styled.div`
  margin-top: 3rem;
`;
const Section = styled.div`
  background-color: #e2e3e4;
  h1 {
    padding-bottom: 2.5rem;
  }
`;

export default class BlogArticles extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <HireOptions
          hireBgImage="/images/blog/article.png"
          title="05/01/2020"
          middleText="TOP 5 REASONS TO CHOOSE DECKERDENCE FOR YOUR VENUE"
          subTitle="WEDDING VENUE"
          textColor={props => props.theme.darkShades}
        />
        <Section className="section">
          <div className="container">
            <h1 className="has-text-centered is-size-1">Categories</h1>
            <div className="columns is-multiline">
              <BlogCategoryItem category="Deckerdence Events" />
              <BlogCategoryItem category="The Deckerdence Journal" />
              <BlogCategoryItem category="Wedding Advice & Tips" />
              <BlogCategoryItem category="Wedding Fairs" />
              <BlogCategoryItem category="Wedding venue" />
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
        <CalendarSlider />
      </Layout>
    );
  }
}

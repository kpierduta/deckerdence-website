import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireOptions from '../components/HireOptions';
import BlogCategories from '../components/BlogCategories';
import BlogArticleData from '../components/BlogArticleData';
import CalendarSlider from '../components/CalendarSlider';

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
        <BlogCategories />
        <BlogArticleData />
        <CalendarSlider />
      </Layout>
    );
  }
}

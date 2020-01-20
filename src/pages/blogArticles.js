import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireOptions from '../components/HireOptions';
import OptionToIncludes from '../components/OptionToIncludes';
import BlogArticle from '../components/BlogArticle';

export default class BlogArticles extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <HireOptions
          hirebgImage="/images/blog/article.png"
          mainTitle="05/01/2020"
          centerText="Top 5 reasons"
          subTitle="Wedding venue"
          textcolor={props => props.theme.darkShades}
        />
        <OptionToIncludes />
        <BlogArticle />
      </Layout>
    );
  }
}

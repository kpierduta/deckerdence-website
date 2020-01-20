import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireOptions from '../components/HireOptions';

export default class BlogArticle extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <HireOptions
          hirebgImage="/images/blog/article.png"
          mainTitle="05/01/2020"
          centerText="Top 5 reasons"
          subTitle="Wedding venue"
        />
      </Layout>
    );
  }
}
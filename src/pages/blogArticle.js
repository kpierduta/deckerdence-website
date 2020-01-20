import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';

export default class BlogArticle extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
      </Layout>
    );
  }
}

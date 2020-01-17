import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';

import BlogTile from '../components/BlogTile';

export default class BlogPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <PageHeading title="BLog" />
        <BlogTile />
      </Layout>
    );
  }
}

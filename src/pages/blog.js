import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';

import BlogTile from '../components/BlogTile';

const BlogPage = () => (
  <Layout>
    <Seo title="Home" description="Welcome to GatsbyJs v1" />
    <PageHeading title="BLOG" />
    <BlogTile />
  </Layout>
);

export default BlogPage;

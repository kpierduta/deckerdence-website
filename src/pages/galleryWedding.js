import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import PageTitle from '../components/elements/PageTitle';
import TestimonialsData from '../components/TestimonialsData';

const GalleryWedding = () => (
  <Layout>
    <Seo title="Home" description="Welcome to GatsbyJs v1" />
    <PageHeading title="Gallery" />
    <PageTitle title="Weddings" />
    <TestimonialsData />
  </Layout>
);

export default GalleryWedding;

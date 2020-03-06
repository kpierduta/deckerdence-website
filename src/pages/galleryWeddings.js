import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import PageTitle from '../components/elements/PageTitle';
import Testimonials from '../components/Testimonials';
import BlackButton from '../components/elements/BlackButton';

const GalleryWeddings = () => (
  <Layout>
    <Seo title="Gallery Weddings" />
    <PageHeading title="Gallery" />
    <PageTitle title="Weddings" />
    <div className="columns is-multiline">
      <Testimonials
        Image="/images/gallery/photo-1@2x.png"
        title="Lanterns and chandeliers"
      />
      <Testimonials
        Image="/images/gallery/photo-1@2x.png"
        title="colourful decor"
      />
      <Testimonials
        Image="/images/gallery/photo-1@2x.png"
        title="unique party Venue"
      />
      <Testimonials
        Image="/images/gallery/photo-1@2x.png"
        title="Maz’s bespoke party setup"
      />
      <Testimonials
        Image="/images/gallery/photo-1@2x.png"
        title="party styling"
      />
      <Testimonials
        Image="/images/gallery/photo-1@2x.png"
        title="cocktails on the upper deck"
      />
    </div>
    <BlackButton
      image="/images/parties/view-more@2x.png"
      alt="Learn More Button"
      hasWidth="20%"
    />
  </Layout>
);

export default GalleryWeddings;

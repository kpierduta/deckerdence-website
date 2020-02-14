import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import PageTitle from '../components/elements/PageTitle';
import BlackButton from '../components/elements/BlackButton';
import Testimonials from '../components/Testimonials';

const GalleryParties = () => (
  <Layout>
    <Seo title="Home" />
    <PageHeading title="GALLERY" />
    <PageTitle title="Parties" />
    <div className="columns is-multiline">
      <Testimonials
        bgImage="/images/gallery/photo-1@2x.png"
        title="Lanterns and chandeliers"
      />
      <Testimonials
        bgImage="/images/gallery/photo-1@2x.png"
        title="colourful decor"
      />
      <Testimonials
        bgImage="/images/gallery/photo-1@2x.png"
        title="unique party Venue"
      />
      <Testimonials
        bgImage="/images/gallery/photo-1@2x.png"
        title="Maz’s bespoke party setup"
      />
      <Testimonials
        bgImage="/images/gallery/photo-1@2x.png"
        title="party styling"
      />
      <Testimonials
        bgImage="/images/gallery/photo-1@2x.png"
        title="cocktails on the upper deck"
      />
      <BlackButton />
    </div>
  </Layout>
);

export default GalleryParties;

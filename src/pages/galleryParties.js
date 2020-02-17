import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import PageTitle from '../components/elements/PageTitle';
import BlackButton from '../components/elements/BlackButton';
import Testimonials from '../components/Testimonials';

const GalleryParties = () => (
  <Layout>
    <Seo title="Gallery Parties" />
    <PageHeading title="GALLERY" />
    <PageTitle title="Parties" />
    <div className="columns is-multiline">
      <Testimonials
        bgImage="/images/gallery/photo-1@2x.png"
        title="The Perfect VenuE"
      />
      <Testimonials
        bgImage="/images/gallery/photo-1@2x.png"
        title="Deckerdence at night"
      />
      <Testimonials
        bgImage="/images/gallery/photo-1@2x.png"
        title="Our venue is mobile"
      />
      <Testimonials
        bgImage="/images/gallery/photo-1@2x.png"
        title="Enjoy a drink"
      />
      <Testimonials
        bgImage="/images/gallery/photo-1@2x.png"
        title="summer event"
      />
      <Testimonials
        bgImage="/images/gallery/photo-1@2x.png"
        title="TopDeck Cocktail Bar"
      />
      <Testimonials
        bgImage="/images/gallery/photo-1@2x.png"
        title="A flexible venue"
      />
      <Testimonials
        bgImage="/images/gallery/photo-1@2x.png"
        title="cocktails on the upper deck"
      />
      <Testimonials
        bgImage="/images/gallery/photo-1@2x.png"
        title="Side awning - perfect for summer events"
      />
    </div>
    <BlackButton
      image="/images/parties/view-more@2x.png"
      alt="Learn More Button"
      hasWidth="20%"
    />
  </Layout>
);

export default GalleryParties;

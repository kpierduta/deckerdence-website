import React from 'react';
import styled from 'styled-components';

import GalleryItem from '../GalleryItem';

const Section = styled.section``;

const galleryImages = [
  { _key: 1, src: '/images/new/demo.png' },
  { _key: 2, src: '/images/new/demo.png' },
  { _key: 3, src: '/images/new/demo.png' },
];

const GalleryImages = () => (
  <Section className="section">
    <div className="container">
      <div className="columns is-variable is-3 is-multiline">
        {galleryImages.map(item => (
          <GalleryItem src={item.src} key={item._key} alt={item.alt || ''} />
        ))}
      </div>
    </div>
  </Section>
);

export default GalleryImages;

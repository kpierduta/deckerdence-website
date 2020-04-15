import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  img {
    filter: gray;
    filter: grayscale(1);
    transition: all 0.8s ease-in-out;
  }

  img:hover {
    filter: none;
    filter: grayscale(0);
  }
`;

const GalleryItem = ({ coloredImage, alt }) => (
  <Section className="column is-4">
    <figure className="image is-5by4">
      <img src={coloredImage} alt={alt} />
    </figure>
  </Section>
);

export default GalleryItem;

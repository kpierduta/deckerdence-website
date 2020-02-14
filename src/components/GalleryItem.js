import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .is-5by4 {
    width: 100%;
    height: 100%;
  }
  .is-5by4 .img-top {
    display: none;
    position: absolute;
    z-index: 99;
  }
  .is-5by4:hover .img-top {
    display: inline;
  }
`;

const GalleryItem = ({
  onMouseOver,
  imageBw,
  imageColoured,
  altColour,
  altBw,
}) => (
  <Section className="column is-4">
    <figure className="image is-5by4">
      <img src={imageColoured} onFocus={onMouseOver} alt={altColour} />
      <img src={imageBw} className="img-top" alt={altBw} />
    </figure>
  </Section>
);

export default GalleryItem;

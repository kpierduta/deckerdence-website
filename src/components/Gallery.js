import React from 'react';
import styled from 'styled-components';

import Button from './elments/Button';

const Section = styled.div`
  margin-top: 4rem;
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
const images = [
  '/images/gallery/goin.png',
  '/images/gallery/goin.png',
  '/images/gallery/goin.png',
  '/images/gallery/goin.png',
  '/images/gallery/goin.png',
  '/images/gallery/goin.png',
];

const Gallery = () => (
  <Section className="">
    <div className="columns is-variable is-3 is-multiline">
      {images.map(items => (
        <div className="column is-4">
          <figure className="image is-5by4">
            <img
              src="/images/gallery/goin.png"
              alt="colored_Image"
              onMouseOver="onHover(/images/gallery/colored.png);"
            />
            <img
              src="/images/gallery/colored.png"
              className="img-top"
              alt="Card Front"
            />
          </figure>
        </div>
      ))}
    </div>
    <Button />
  </Section>
);
export default Gallery;

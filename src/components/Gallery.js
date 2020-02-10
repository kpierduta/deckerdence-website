import React from 'react';
import styled from 'styled-components';

import Button from './elments/Button';

const Section = styled.div`
  margin-top: 4rem;
`;
const images = [
  '/images/gallery/goin.png',
  '/images/gallery/goin.png',
  '/images/gallery/goin.png',
  '/images/gallery/goin.png',
  '/images/gallery/goin.png',
  '/images/gallery/goin.png',
];

class Gallery extends React.Component {
  render() {
    return (
      <Section className="">
        <div className="columns is-variable is-3 is-multiline">
          {images.map(items => (
            <div className="column is-4">
              <figure className="image is-5by4">
                <img src={items} alt="gallery" />
              </figure>
            </div>
          ))}
        </div>
        <Button />
      </Section>
    );
  }
}

export default Gallery;

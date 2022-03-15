import React from 'react';
import SanityImage from './global/SanityImage';

const FestivalIcon = ({ image, alternative }) => (
  <div className="section column is-3">
    <div className="container">
      <figure className="image">
        <SanityImage gatsbyImageData={image} alt={alternative} />
      </figure>
    </div>
  </div>
);

export default FestivalIcon;

import React from 'react';
import SanityImage from '../global/SanityImage';

const HeroBanner = ({ image }) => {
  return <SanityImage fluid={image.asset.id} width="5000" />;
};

export default HeroBanner;

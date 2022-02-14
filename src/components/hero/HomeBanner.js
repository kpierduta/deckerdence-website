import React from 'react';
import SanityImage from '../global/SanityImage';

const HeroBanner = ({ image }) => {
  return <SanityImage fluid={image.asset.id} width="2000" />;
};

export default HeroBanner;

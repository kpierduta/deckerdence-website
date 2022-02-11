import React from 'react';
import PropTypes from 'prop-types';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import config from '../../utils/config';

const sanityConfig = {
  projectId: config.sanityId,
  dataset: config.dataset,
};

const SanityImage = ({ fluid, gatsbyImage, alt, width, ...props }) => {
  if (gatsbyImage) {
    const image = getImage(gatsbyImage);
    return (
      <GatsbyImage
        gatsbyImage={image}
        alt={alt || config.siteName}
        {...props}
      />
    );
  }

  if (fluid) {
    const imageData = getGatsbyImageData(fluid, { width }, sanityConfig);
    return <GatsbyImage image={imageData} alt={alt} width={width} {...props} />;
  }

  return null;
};

export default SanityImage;

SanityImage.propTypes = {
  alt: PropTypes.string,
  gatsbyImage: PropTypes.string,
  width: PropTypes.number,
};

SanityImage.defaultProps = {
  alt: 'deckerdence',
  gatsbyImage: '',
  width: 1400,
};

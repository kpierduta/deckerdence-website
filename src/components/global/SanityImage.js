import React from 'react';

import PropTypes from 'prop-types';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import config from '../../utils/config';

const SanityImage = ({
  fluid,
  gatsbyImageData,
  alt,
  gatsbyImage,
  width,
  ...props
}) => {
  if (gatsbyImage) {
    const sanityConfig = {
      projectId: config.sanityId,
      dataset: config.dataset,
    };

    const imageData = getGatsbyImageData(
      gatsbyImage,
      { width: 1600 },
      sanityConfig,
    );
    return <GatsbyImage image={imageData} alt={alt} {...props} />;
  }

  if (gatsbyImageData) {
    const image = getImage(gatsbyImageData);

    return <GatsbyImage image={image} alt={alt || ''} {...props} />;
  }

  if (fluid && width) {
    const sanityConfig = {
      projectId: config.sanityId,
      dataset: config.dataset,
    };

    const imageData = getGatsbyImageData(fluid, { width }, sanityConfig);

    return <GatsbyImage image={imageData} alt={alt} width={width} {...props} />;
  }

  return null;
};

export default SanityImage;

SanityImage.propTypes = {
  fluid: PropTypes.string,
  alt: PropTypes.string,
  gatsbyImageData: PropTypes.string,
  gatsbyImage: PropTypes.string,
  width: PropTypes.number,
};

SanityImage.defaultProps = {
  alt: '',
  fluid: '',
  gatsbyImageData: '',
  gatsbyImage: '',
  width: 1600,
};

import React from 'react';

import { EmptyState } from '../components/elements';

import HomeBanner from '../components/hero/HomeBanner';
import WelcomeHeading from '../components/welcome/WelcomeHeading';
import Venues from '../components/venue/Venues';
import VenueInfoBlock from '../components/venue/VenueInfoBlock';
import Gallery from '../components/gallery/Gallery';
import Testimonial from '../components/testimonial/Testimonial';
import ContentBlock from '../components/welcome/ContentBlock';

// sanity blocks
const Blocks = {
  heroBlock: HomeBanner,
  headingBlock: WelcomeHeading,
  venueBlock: Venues,
  venueInfoBlock: VenueInfoBlock,
  galleryBlock: Gallery,
  testimonialBlock: Testimonial,
  contentBlock: ContentBlock,
};

const ContentBlocks = type => {
  const BlockNotFound = () => (
    <EmptyState title="Error: The requested component" message={type} />
  );

  if (typeof Blocks[type] === 'undefined') {
    return BlockNotFound;
  }

  return Blocks[type];
};

export default ContentBlocks;

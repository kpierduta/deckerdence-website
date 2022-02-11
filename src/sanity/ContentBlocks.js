import React from 'react';

import { EmptyState } from '../components/elements';

import HomeBanner from '../components/hero/HomeBanner';

// sanity blocks
const Blocks = {
  heroBlock: HomeBanner,
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

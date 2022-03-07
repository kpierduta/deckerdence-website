import React from 'react';

import StagesCardItem from './StagesCardItem';

const Stages = ({ title, image, price, subtitle, guests, mostPopular }) => {
  return (
    <StagesCardItem
      title={title}
      image={image}
      price={price}
      subtitle={subtitle}
      guests={guests}
      mostPopular={mostPopular}
    />
  );
};

export default Stages;

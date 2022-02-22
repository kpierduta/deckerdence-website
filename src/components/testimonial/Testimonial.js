import React from 'react';

import Card from '../global/Card';

const Testimonial = props => {
  const { testimonial = {} } = props;
  return <Card data={testimonial} />;
};

export default Testimonial;

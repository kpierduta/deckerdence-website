import React from 'react';
import styled from 'styled-components';

import HireOptionTestimonial from '../HireOptionTestimonial';

const Section = styled.section``;

const testimonial = [
  {
    _id: 1,
    image: '',
    title: 'Lorem ipsum',
    description:
      'Clare and her team made the day absolutely amazing for us and all of our 150 guests! Such a unique venue that provides everything you want and so much more. Such special touches including a personalised',
    name: 'Jhon Doe',
    date: '14-04-2020',
  },
];

const Testimonials = () => (
  <Section className="section">
    <div className="container">
      {testimonial.map(item => (
        <HireOptionTestimonial
          key={item._id}
          image="/images/new/bg1.png"
          //   flex={item.node.columnReverse}
          title={item.title}
          pera={item.description}
          alt="HireOptionTestimonial"
          name={item.name}
          date={item.date}
        />
      ))}
    </div>
  </Section>
);

export default Testimonials;

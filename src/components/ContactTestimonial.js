import React from 'react';
import styled from 'styled-components';
import HireCardSlider from './HireCardSlider';

const Section = styled.section`
  background-image: url('/images/contacts/background.png');
`;

const ContactTestimonial = () => (
  <Section className="section hero is-fullheight">
    <div className="container">
      <h1>Testimonials</h1>
      <h3>
        Here are some testimonials from our clients that have used Deckerdence
        to stage their perfect event!
      </h3>
      <div />
      <HireCardSlider />
    </div>
  </Section>
);

export default ContactTestimonial;

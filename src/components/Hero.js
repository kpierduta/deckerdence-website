import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('/images/hero-img.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
`;

const Hero = () => (
  <Section className="hero is-large">
    <div className="hero-body" />
  </Section>
);

export default Hero;

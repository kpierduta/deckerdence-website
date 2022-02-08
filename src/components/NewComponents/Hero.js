import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('${props => props.bgImg}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
`;

const Hero = ({ bgImg }) => (
  <Section className="hero is-fullheight" bgImg={bgImg}>
    <div className="hero-body" />
  </Section>
);

export default Hero;

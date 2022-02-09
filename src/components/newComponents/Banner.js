import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('${props => props.bgImg}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Hero = ({ bgImg }) => (
  <Section className="hero is-fullheight" bgImg={bgImg} />
);

export default Hero;

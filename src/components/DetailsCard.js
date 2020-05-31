import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    background-image: url('${props => props.boxImage}');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 11rem 1.5rem !important;
`;

const DetailsCard = ({ para, boxImage }) => (
  <Section className="hero-body" boxImage={boxImage}>
    <p className="subtitle is-5 has-text-black">{para}</p>
  </Section>
);

export default DetailsCard;

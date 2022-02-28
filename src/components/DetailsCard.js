import React from 'react';
import styled from 'styled-components';

import { PortableText } from './elements';

const Section = styled.div`
    background-image: url('${props => props.boxImage}');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 11rem 1.5rem !important;
    p {
      font-size: 19px !important;
      color: rgb(44, 44, 42) !important;
      margin-bottom:1rem;
      text-align: center;
    }
`;

const DetailsCard = ({ data, boxImage }) => {
  return (
    <Section className="hero-body" boxImage={boxImage}>
      <PortableText>{data}</PortableText>
    </Section>
  );
};

export default DetailsCard;

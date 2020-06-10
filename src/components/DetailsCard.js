import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const Section = styled.div`
    background-image: url('${props => props.boxImage}');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 11rem 1.5rem !important;
    p{
      font-size: 17px !important;
      color: rgb(44, 44, 42) !important;
    }
`;

const DetailsCard = ({ data, boxImage }) => (
  <Section className="hero-body" boxImage={boxImage}>
    <BlockContent blocks={data.content} />
  </Section>
);

export default DetailsCard;

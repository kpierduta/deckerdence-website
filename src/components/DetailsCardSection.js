import React from 'react';
import styled from 'styled-components';

import DetailsCard from './DetailsCard';

const Container = styled.section`
  h1 {
    padding: 3rem 0;
  }
`;

const DetailsCardSection = ({ data }) => (
  <Container className="section">
    <div className="container">
      <h1 className="has-text-centered is-size-1">{data.detailsMainHeading}</h1>
      <div className="columns is-multiline">
        <DetailsCard para={data.firstCardDescription} />
        <DetailsCard para={data.secondCardDescription} />
      </div>
    </div>
  </Container>
);

export default DetailsCardSection;

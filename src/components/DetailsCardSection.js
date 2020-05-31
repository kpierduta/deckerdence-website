import React from 'react';
import styled from 'styled-components';
import DetailsCard from './DetailsCard';

const Container = styled.section`
  h1 {
    padding: 1rem 0;
  }
`;

const DetailsCardSection = ({ data }) => (
  <Container className="section">
    <div className="container">
      <h1 className="title is-3 has-text-centered">
        {data.detailsMainHeading}
      </h1>
      <div className="columns is-multiline">
        {data.details.map(item => (
          <DetailsCard
            key={item._key}
            para={item.body}
            boxImage={item.finerDetailsImage.asset.url}
          />
        ))}
      </div>
    </div>
  </Container>
);

export default DetailsCardSection;

import React from 'react';
import styled from 'styled-components';
import DetailsCard from './DetailsCard';

const Container = styled.section`
  h1 {
    padding: 1rem 0;
  }
  .column {
    background-image: url('/images/card-bg.png');
    margin: 0 0.5rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;

const DetailsCardSection = ({ content = [], title }) => (
  <Container className="section">
    <div className="container">
      <h1 className="title is-3 has-text-centered">{title}</h1>
      <div className="columns is-multiline">
        {content.map(item => (
          <div className="column hero is-medium" key={item._key}>
            <DetailsCard
              data={item}
              // boxImage={item.finerDetailsImage.asset.url}
            />
          </div>
        ))}
      </div>
    </div>
  </Container>
);

export default DetailsCardSection;

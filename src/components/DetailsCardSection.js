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
        {data.details.map(test =>
          data._rawDetails.map(item => (
            <div className="column is-6 hero is-medium">
              <DetailsCard
                data={item.content}
                key={item._key}
                boxImage={test.finerDetailsImage.asset.url}
              />
            </div>
          )),
        )}
      </div>
    </div>
  </Container>
);

export default DetailsCardSection;

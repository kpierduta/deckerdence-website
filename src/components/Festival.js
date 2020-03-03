import React from 'react';
import styled from 'styled-components';

import FestivalIcon from './FestivalIcon';

const Section = styled.div`
  h1 {
    padding: 2rem 0;
  }
`;

const Festival = ({ data }) => (
  <Section className="section">
    <div className="container">
      <h1 className="title is-2 has-text-weight-normal has-text-centered">
        {data.festival.mainHeading}
      </h1>
      <div className="columns is-multiline is-variable is-5">
        {data.festival.item.map(items => (
          <FestivalIcon
            image={items.avatar.asset.url}
            alternative="festivals"
          />
        ))}
      </div>
      <h1 className="title is-2 has-text-weight-normal has-text-centered">
        {data.festival.subtitle}
      </h1>
    </div>
  </Section>
);

export default Festival;

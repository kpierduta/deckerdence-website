import React from 'react';
import styled from 'styled-components';

import Stages from './Stages';
import Heading from './elements/Heading';

const Section = styled.section`
  .heading {
    margin: 3rem 0;
  }
`;

const StagesSection = ({ data }) => (
  <Section className="section">
    <div className="container">
      <div className="heading">
        <Heading
          heading={data.simpleStages.mainHeading}
          size="is-size-3-mobile"
        />
      </div>
      <div className="columns">
        {data.simpleStages.item.map(items => (
          <Stages
            key={items._key}
            title={items.title}
            subtitle={items.subTitle}
            image={items.avatar.asset.url}
            to="/"
          />
        ))}
      </div>
    </div>
  </Section>
);

export default StagesSection;

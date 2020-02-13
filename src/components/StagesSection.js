import React from 'react';
import styled from 'styled-components';

import Stages from './Stages';
import Heading from './elements/Heading';

const Section = styled.section`
  .heading {
    margin: 3rem 0;
  }
`;

const StagesSection = () => (
  <Section className="section">
    <div className="container">
      <div className="heading">
        <Heading heading="THREE SIMPLE STAGES" size="is-size-3-mobile" />
      </div>
      <div className="columns">
        <Stages
          title="1. Choose your location"
          subtitle="We can bring our unique venue to a location of your choosing, or
              you can host your party at our fully-equipped event space in the
              Coleshill"
          image="/images/parties/icon@2x.png"
          alt="dddddd" // change this as per your image
        />
        <Stages
          title="1. Choose your location"
          subtitle="We can bring our unique venue to a location of your choosing, or
              you can host your party at our fully-equipped event space in
              Coleshill"
          image="/images/parties/icon@2x.png"
        />
        <Stages
          title="1. Choose your location"
          subtitle="We can bring our unique venue to a location of your choosing, or
              you can host your party at our fully-equipped event space in
              Coleshill"
          image="/images/parties/icon@2x.png"
        />
      </div>
    </div>
  </Section>
);

export default StagesSection;

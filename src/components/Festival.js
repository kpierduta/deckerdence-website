import React from 'react';
import styled from 'styled-components';

import Heading from './elments/Heading';

const Section = styled.div``;

const Festival = () => {
  return (
    <Section className="section">
      <div className="container">
        <Heading title="OUR VENUE IS PERFECT FOR..." />
        <div className="columns is-multiline is-variable is-5">
          <div className="column">
            <figure className="image">
              <img src="/images/festival/festivals@2x.png" alt="" />
            </figure>
          </div>
          <div className="column">
            <figure className="image">
              <img src="/images/festival/festivals@2x.png" alt="" />
            </figure>
          </div>
          <div className="column">
            <figure className="image">
              <img src="/images/festival/festivals@2x.png" alt="" />
            </figure>
          </div>
          <div className="column">
            <figure className="image">
              <img src="/images/festival/festivals@2x.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Festival;

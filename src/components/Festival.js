import React from 'react';
import styled from 'styled-components';

import FestivalIcon from './FestivalIcon';

const Section = styled.div``;

const Festival = ({ title, subtitle }) => (
  <Section className="section">
    <div className="container">
      <h1 className="title is-2 has-text-weight-normal has-text-centered">
        {title}
      </h1>
      <div className="columns is-multiline is-variable is-5">
        <FestivalIcon
          image="/images/festival/exhibitions@2x.png"
          alternative="products"
        />
        <FestivalIcon
          image="/images/festival/fairs@2x.png"
          alternative="products"
        />
        <FestivalIcon
          image="/images/festival/festivals@2x.png"
          alternative="products"
        />
        <FestivalIcon
          image="/images/festival/fetes@2x.png"
          alternative="products"
        />
      </div>
      <h1 className="title is-2 has-text-weight-normal has-text-centered">
        {subtitle}
      </h1>
    </div>
  </Section>
);

export default Festival;

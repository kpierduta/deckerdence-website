import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: 100% 100%;
  .column {
    align-self: center;
  }
`;

const HireHero = ({ Option, subtitle, title, bgImage }) => (
  <Section className="section is-large" bgImage={bgImage}>
    <div className="columns is-centered is-mobile">
      <div className="column is-narrow">
        <figure className="image is-32x32">
          <img src="/images/left-flower.png" alt="" />
        </figure>
      </div>
      <div className="column is-narrow">
        <h1 className="title is-3 has-text-white">{Option}</h1>
      </div>
      <div className="column is-narrow">
        <figure className="image is-32x32">
          <img src="/images/right-flower.png" alt="" />
        </figure>
      </div>
    </div>
    <h1 className="title is-1 is-size-3-touch is-spaced has-text-white has-text-centered">
      {title}
    </h1>
    <h1 className="subtitle is-3 is-size-4-touch has-text-white has-text-centered is-family-secondary">
      {subtitle}
    </h1>
  </Section>
);

export default HireHero;

import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url('/images/hire/option-1.png');
  background-size: 100% 100%;
  .column {
    align-self: center;
  }

  h1 {
    font-size: 4.125rem !important;
  }
`;

const HireHero = () => (
  <Section className="section is-large">
    <div className="columns is-centered is-mobile">
      <div className="column is-narrow">
        <figure className="image is-64x64">
          <img src="/images/left-flower.png" alt="" />
        </figure>
      </div>
      <div className="column is-narrow">
        <h1 className="is-size-1 has-text-white">Option 3</h1>
      </div>
      <div className="column is-narrow">
        <figure className="image is-64x64">
          <img src="/images/right-flower.png" alt="" />
        </figure>
      </div>
    </div>
    <h1 className="title is-spaced is-size-1 has-text-white has-text-centered">
      Deckerdence Vintage Bus Bar
    </h1>
    <h2 className="has-text-white has-text-centered is-size-3">
      with Half Wraparound Marquee
    </h2>
  </Section>
);

export default HireHero;

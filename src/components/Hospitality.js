import React from 'react';
import styled from 'styled-components';
import Button from './elments/Button';

const Section = styled.section`
  background-image: url('/images/events/Hospitality@3x.png');
  background-size: cover;
  .first {
    height: 46rem;
    background-image: url('/images/events/box-4.png');
    background-repeat: no-repeat;
  }
  section {
    padding: 12rem 13.5rem 0rem 8rem;
  }
  .subtitle.is-5 {
    font-family: ${props => props.theme.primaryFontFamily};
  }
`;

const Hospitality = () => (
  <Section>
    <div className="columns">
      <div className="column is-4"></div>
      <div className="column first">
        <section className="section">
          <div className="container">
            <h1 className="title is-2 has-text-white has-text-weight-semibold	is-spaced">
              Hospitality
            </h1>
            <h1 className="subtitle is-5 has-text-white has-text-weight-normal">
              Deliver an event with a difference. Whether you’re hosting a
              corporate event, fashion show, award ceremony or ball, Deckerdence
              provides a unique space to entertain. Complete with bar, cocktail
              lounge and a bird’s eye view at sporting events, our vintage bus
              will give your clients a day to remember.
            </h1>
            <Button />
          </div>
        </section>
      </div>
    </div>
  </Section>
);

export default Hospitality;

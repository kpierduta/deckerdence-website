import React from 'react';
import styled from 'styled-components';
import Button from './elments/Button';

const Section = styled.section`
  background-image: url('/images/events/event@3x.png');
  background-size: cover;
  .first {
    height: 41rem;
    background-image: url('/images/events/box-3.png');
    margin-top: 1rem;
    background-repeat: no-repeat;
  }
  section {
    padding: 10rem 16rem 0rem 5rem;
  }
  .subtitle.is-5 {
    font-family: ${props => props.theme.primaryFontFamily};
  }
`;

const Events = () => (
  <Section className="section">
    <div className="columns">
      <div className="column is-9 first">
        <section className="section">
          <div className="container">
            <h1 className="title is-2 has-text-white has-text-weight-semibold	is-spaced">
              EVENTS
            </h1>
            <h1 className="subtitle is-5 has-text-white has-text-weight-normal">
              Make your event stand out from the crowd. With a classical bar and
              luxurious cocktail lounge, our vintage bus provides a stunning
              feature for your event. Perfect for festivals, fêtes, fairs and
              exhibitions, our unique mobile venue can travel anywhere in the
              UK.
            </h1>
            <Button />
          </div>
        </section>
      </div>
    </div>
  </Section>
);

export default Events;

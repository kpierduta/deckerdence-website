import React from 'react';
import styled from 'styled-components';
import Button from './elments/Button';

const Section = styled.section`
  background-image: url('/images/events/party@3x.png');
  background-size: cover;
  .first {
    height: 41rem;
    background-image: url('/images/events/box-2.png');
    margin-top: 6rem;
    background-repeat: no-repeat;
  }
  section {
    padding: 10rem 1.5rem 0rem 1.5rem;
  }
  .subtitle.is-5 {
    font-family: ${props => props.theme.primaryFontFamily};
  }
`;

const Party = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column" />
        <div className="column is- 6 first">
          <section className="section">
            <div className="container">
              <h1 className="title is-2 has-text-white has-text-weight-semibold	is-spaced">
                PARTIES
              </h1>
              <h1 className="subtitle is-5 has-text-white has-text-weight-normal">
                Throw the best party in town. No matter what the occasion, our
                vintage bus provides an incredible focal point for your party.
                Serving up traditional drinks and cocktails, with an old English
                drawing room inspired lounge on-board, we can deliver the
                vintage party for you.
              </h1>
              <Button />
            </div>
          </section>
        </div>
      </div>
    </div>
  </Section>
);

export default Party;

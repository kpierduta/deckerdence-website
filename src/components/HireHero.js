import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('/images/hire/background.png');
  .column {
    background-image: url('/images/hire/frame.png');
    background-repeat: no-repeat;
    height: 34rem;
  }
  .title.is-4 {
    margin-top: 2rem;
  }
`;

const HireHero = () => (
  <Section className="section">
    <div className="container">
      <div className="columns  is-centered">
        <div className="column is-9 has-text-centered">
          <section className="section">
            <div className="container">
              <h1 className="title is-4 has-text-white has-text-weight-normal">
                Unique Mobile Venue
              </h1>
              <h1 className="title is-1 has-text-white has-text-weight-semibold	">
                Find the perfect Deckerdence Hire option for your event
              </h1>
              <img src="/images/hire/decorative-line.png" alt="" />
              <h1 className="subtitle is-4 has-text-white">
                Deckerdence is a unique mobile venue that is avalible to hire in
                4 different options. All these options are fully customisable so
                that you can create the perfect setup for your event.
              </h1>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Section>
);

export default HireHero;

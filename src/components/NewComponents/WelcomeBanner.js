import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${props => props.theme.backgroundDark};
  .subtitle {
    font-size: ${props => props.theme.fontFullLarge}px;
    color: ${props => props.theme.lightAccent};
  }
  .title {
    color: ${props => props.theme.lightAccent};
  }
`;

const WelcomeBanner = () => (
  <Section className="section">
    <div className="container has-text-centered">
      <div>
        <span className="title is-uppercase has-text-weight-bold is-size-3-mobile">
          WELCOME TO DECKERDENCE
        </span>
      </div>
      <div className="subtitle is-uppercase has-text-weight-bold is-size-2-mobile">
        UNIQUE MOBILE VENUE
      </div>
    </div>
  </Section>
);

export default WelcomeBanner;

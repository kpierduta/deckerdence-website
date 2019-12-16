import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('/images/home/background.png');

  .columns.is-centered {
    margin-top: 31rem;
  }
`;

const HomeHero = () => (
  <Section className="section">
    <div className="container">
      <figure className="image">
        <img src="/images/home/title-banner@2x.png" />
      </figure>
      <div className="columns  is-centered">
        <div className="column is-10 has-text-centered">
          <h1 className="title is-2 has-text-white has-text-weight-semibold	">
            Get in Touch!
          </h1>
          <h1 className="title is-3 has-text-white has-text-weight-semibold	">
            <span className="has-text-grey-lighter has-text-weight-light ">
              Email:
            </span>
            enquiries@deckerdence.com{' '}
            <span className="has-text-grey-lighter has-text-weight-light">
              OR Call:
            </span>
            01675 463555
          </h1>
        </div>
      </div>
    </div>
  </Section>
);

export default HomeHero;

import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media screen and (min-width: 1024px) {
    padding: 6rem 1.5rem !important;
  }
  .column {
    background-image: url(${props => props.frame});
    background-repeat: no-repeat;
    background-position: cover;
    background-size: 100% 100%;
    padding: 5rem 2rem 4rem 2rem;
    justify-content: space-between;
  }
`;

const HireOptionHero = ({
  bgImage,
  frame,
  smallText,
  largeText,
  description,
}) => (
  <Section className="section hero is-medium" bgImage={bgImage} frame={frame}>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-9 has-text-centered">
            <h1 className="title is-4 has-text-white has-text-weight-normal">
              {smallText}
            </h1>
            <h1 className="title is-3 has-text-white has-text-weight-semibold">
              {largeText}
            </h1>
            <img src="/images/hire/decorative-line.png" alt="" />
            <h1 className="subtitle is-5 has-text-white">{description}</h1>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default HireOptionHero;

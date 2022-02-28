import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 1024px) {
    padding: 6rem 1.5rem !important;
  }
  .column {
    background-image: url('/images/hire/optionFrame.png');
    background-repeat: no-repeat;
    background-position: contain;
    background-size: 100% 100%;
    padding: 5rem 2rem 4rem 2rem;
    justify-content: space-between;
  }
`;

const HireHero = ({ image, title, description }) => {
  return (
    <Section className="section hero is-medium" bgImage={image.asset.url}>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-9 has-text-centered">
              <h1 className="title is-2 has-text-white has-text-weight-semibold">
                {title}
              </h1>

              <h1 className="subtitle is-5 has-text-white">{description}</h1>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HireHero;

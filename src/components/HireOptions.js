import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${props => props.hireBgImage});
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    background-size: cover;
  }
  /* .has-text-white {
    color: ${props => props.textColor} !important ;
  } */
  h2 {
    padding: 2rem 0rem 2rem 0rem;
  }
`;

const HireOptions = ({
  hireBgImage,
  title,
  subTitle,
  middleText,
  textColor,
}) => (
  <Section
    className="section is-large"
    hireBgImage={hireBgImage}
    textColor={textColor}
  >
    <div className="container">
      <div className="columns">
        <div className="column has-text-centered">
          <h1 className="title is-3 has-text-black has-text-weight-normal">
            {title}
          </h1>
          <h2 className="title is-1 has-text-black is-size-4-touch">
            {middleText}
          </h2>
          <h1 className="subtitle is-3 has-text-weight-bold has-text-black is-size-5-touch">
            {subTitle}
          </h1>
        </div>
      </div>
    </div>
  </Section>
);

export default HireOptions;

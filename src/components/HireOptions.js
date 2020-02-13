import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${props => props.hireBgImage});
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    background-size: cover;
  }
  .has-text-white {
    color: ${props => props.textColor} !important ;
  }
  h1 {
    padding: 2rem 0 0 0;
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
          <h2 className="is-spaced is-size-3 has-text-white is-size-6-mobile">
            {title}
          </h2>
          <h1 className="subtitle is-1 has-text-weight-bold has-text-white is-size-5-mobile">
            {middleText}
          </h1>
          <h2 className="subtitle is-size-3 has-text-white is-size-6-mobile">
            {subTitle}
          </h2>
        </div>
      </div>
    </div>
  </Section>
);

export default HireOptions;

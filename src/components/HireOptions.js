import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${props => props.hireBgImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    background-size: cover;
  }
  h2 {
    padding: 2rem 0rem 2rem 0rem;
  }
  .text {
    color: ${props =>
      props.color
        ? props.theme.textColorLite
        : props.theme.backgroundColor} !important;
  }
`;

const HireOptions = ({ hireBgImage, title, subTitle, middleText, color }) => (
  <Section className="section is-large" hireBgImage={hireBgImage} color={color}>
    <div className="container">
      <div className="columns">
        <div className="column has-text-centered">
          <h1 className="title is-3  has-text-weight-normal text">{title}</h1>
          <h2 className="title is-1  is-size-4-touch text">{middleText}</h2>
          <h1 className="subtitle is-3 has-text-weight-bold  is-size-5-touch text">
            {subTitle}
          </h1>
        </div>
      </div>
    </div>
  </Section>
);

export default HireOptions;

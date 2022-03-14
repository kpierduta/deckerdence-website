import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  box-shadow: none;
  background-color: transparent;
  padding-top: 8rem;
  @media screen and (max-width: 767px) {
    padding-top: 10rem;
    padding-bottom: 4rem;
  }
  .title,
  .subtitle {
    color: ${props => (props.textBlack ? '#2c2c2a' : '#ffff')} !important;
  }
  .title.is-4 {
    margin-bottom: 1rem !important;
  }
  .card-content {
    @media screen and (max-width: 767px) {
      padding: 0.5rem !important;
    }
  }
`;

const HireCard = ({
  title,
  subtitle,
  description,
  bgColor,
  textBlack,
  date,
  position,
}) => (
  <Section className="card" bgColor={bgColor} textBlack={textBlack}>
    <div className="card-content">
      {title && (
        <h1 className="title is-4 is-spaced  has-text-centered is-uppercase">
          {title}
        </h1>
      )}
      {position && (
        <h1 className="subtitle is-5 has-text-white has-text-centered">
          {position}
        </h1>
      )}
      {subtitle && (
        <p className="subtitle is-4 is-size-6-mobile has-text-centered">
          {subtitle}
        </p>
      )}
      <h1 className="subtitle is-5 has-text-centered has-text-weight-bold">
        {description} <span className="has-text-weight-normal">{date}</span>
      </h1>
    </div>
  </Section>
);

export default HireCard;

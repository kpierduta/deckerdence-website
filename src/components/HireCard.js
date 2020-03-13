import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  box-shadow: none;
  background-color: transparent;
  padding-top: 5rem;
  @media screen and (max-width: 768px) {
    padding-top: 7rem;
  }
  .title,
  .subtitle {
    color: ${props => (props.textBlack ? '#0A0A0A' : '#ffff')} !important;
  }
`;

const HireCard = ({
  title,
  subtitle,
  description,
  bgColor,
  textBlack,
  date,
}) => (
  <Section className="card" bgColor={bgColor} textBlack={textBlack}>
    <div className="card-content">
      <h1 className="title is-3 is-size-4-mobile is-spaced  has-text-centered is-uppercase">
        {title}
      </h1>
      <p className="subtitle  is-size-6-mobile has-text-centered">{subtitle}</p>
      <h1 className="subtitle is-3 is-size-4-mobile has-text-centered is-spaced has-text-weight-bold">
        {description}
        <span> {date}</span>
      </h1>
    </div>
  </Section>
);

export default HireCard;

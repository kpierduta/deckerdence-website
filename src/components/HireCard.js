import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  box-shadow: none;
  background-color: ${props => (props.bgColor ? props.bgColor : 'transparent')};
  padding-top: 5rem;
  @media screen and (max-width: 768px) {
    padding-top: 7rem;
  }
`;

const HireCard = ({ title, subtitle, description, bgColor }) => (
  <Section className="card" bgColor={bgColor}>
    <div className="card-content">
      <h1 className="title is-3 is-size-4-mobile is-spaced has-text-white has-text-centered  is-uppercase">
        {title}
      </h1>
      <p className="subtitle  is-size-6-mobile has-text-centered has-text-white">
        {subtitle}
      </p>
      <h1 className="subtitle is-3 is-size-4-mobile has-text-centered is-spaced has-text-weight-bold  has-text-white-ter">
        {description}
      </h1>
    </div>
  </Section>
);

export default HireCard;

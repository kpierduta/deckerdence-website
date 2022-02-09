import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${props => props.theme.dangerColor};
  p {
    font-size: ${props => props.theme.fontFullLarge}px;
    color: ${props => props.theme.lightAccent};
  }
`;

const BookCall = ({ text }) => (
  <Section className="section">
    <div className="container">
      <p className="is-uppercase has-text-weight-bold has-text-centered is-size-1-mobile">
        {text}
      </p>
    </div>
  </Section>
);

export default BookCall;

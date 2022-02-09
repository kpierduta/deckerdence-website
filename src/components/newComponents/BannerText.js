import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${props =>
    props.bgDark ? props.theme.backgroundDark : props.theme.dangerColor};
  p {
    font-size: ${props => props.theme.fontFullLarge}px;
    color: ${props => props.theme.lightAccent};
  }
`;

const BannerText = ({ text, bgDark }) => (
  <Section className="section" bgDark={bgDark}>
    <div className="container">
      <p className="is-uppercase has-text-weight-bold has-text-centered is-size-1-mobile">
        {text}
      </p>
    </div>
  </Section>
);

export default BannerText;

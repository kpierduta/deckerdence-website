import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .container {
    background-color: ${props =>
      props.hasDarkBg
        ? props.theme.dangerColor
        : props.theme.backgroundDarkSecondary};
    font-size: ${props => props.theme.fontSizeExtraLarge}px;
    padding: 4rem 3rem !important;
  }
  p {
    color: ${props =>
      props.hasDarkBg ? props.theme.lightAccent : props.theme.darkShades};
  }
  .container {
    padding: 1rem 3rem;
  }
  .client {
    padding: 2rem;
  }
`;

const GalleryImages = ({ hasDarkBg }) => (
  <Section className="section" hasDarkBg={hasDarkBg}>
    <div className="container has-text-centered">
      <p>
        “There comes a time in every woman’s life when the only thing that helps
        is a glass of champagene”
      </p>
      <div className="client">
        <p className="has-text-weight-bold">BETTE DAVIS</p>
      </div>
      <p>
        A glass of champagne or a signature cocktail designed especially for you
        from the top deck of Deckerdence
      </p>
    </div>
  </Section>
);

export default GalleryImages;

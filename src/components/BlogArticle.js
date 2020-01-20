import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  .title {
    color: ${props => props.theme.primaryColor} !important ;
  }
`;

const BlogArticle = () => (
  <Section className="section">
    <div className="container">
      <h1 className="title is-2 is-spaced is-uppercase has-text-centered">
        1. Not just a venue service
      </h1>
      <p className="subtitle is-4 has-text-centered">
        When you hire Deckerdence for your venue, you don’t simply get a venue.
        An event to us isn’t just about the location and the space you have,
        it’s about the experience you have at the start of the event when you
        arrive right through to the very end when everyone is leaving. We plan
        all the details right from where to park to tidying away at the end.
        Your on-site team make sure that Deckerdence is gleaming, neat and tidy
        throughout, everyone is safe, the sound system sounds amazing, the light
        up dance floor is working and that your cocktails never run out.
      </p>
    </div>
  </Section>
);

export default BlogArticle;

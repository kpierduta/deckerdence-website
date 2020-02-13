import React from 'react';
import styled from 'styled-components';

import BlogArticle from './BlogArticle';

const Section = styled.div`
  margin-top: 3rem;
`;

const BlogArticleData = () => (
  <Section>
    <BlogArticle
      title="1. Not just a venue service"
      subtitle="When you hire Deckerdence for your venue, you don’t simply get a venue. An event to us isn’t just about the location and the space you have, it’s about the experience you have at the start of the event when you arrive right through to the very end when everyone is leaving. We plan all the details right from where to park to tidying away at the end.  Your on-site team make sure that Deckerdence is gleaming, neat and tidy throughout, everyone is safe, the sound system sounds amazing, the light up dance floor is working and that your cocktails never run out."
    />
    <BlogArticle
      title="2. Experienced event team"
      subtitle="When you work with us you get the expert help and guidance of a team of people that have worked on events across the UK with a wide range of people and companies, including ITV, Slimming World, Breast Cancer Care + much more. Whether you hire us for a corporate event or for a wedding, we cover every aspect of your event in microscopic detail."
    />
    <BlogArticle
      title="3. Bespoke cocktail service"
      subtitle="When you hire Deckerdence for your venue, you don’t simply get a venue. An event to us isn’t just about the location and the space you have, it’s about the experience you have at the start of the event when you arrive right through to the very end when everyone is leaving. We plan all the details right from where to park to tidying away at the end.  Your on-site team make sure that Deckerdence is gleaming, neat and tidy throughout, everyone is safe, the sound system sounds amazing, the light up dance floor is working and that your cocktails never run out."
    />
    <BlogArticle
      title="4. Not just a venue service"
      subtitle="When you hire Deckerdence for your venue, you don’t simply get a venue. An event to us isn’t just about the location and the space you have, it’s about the experience you have at the start of the event when you arrive right through to the very end when everyone is leaving. We plan all the details right from where to park to tidying away at the end.  Your on-site team make sure that Deckerdence is gleaming, neat and tidy throughout, everyone is safe, the sound system sounds amazing, the light up dance floor is working and that your cocktails never run out."
    />
  </Section>
);

export default BlogArticleData;

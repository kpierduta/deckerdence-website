import React from 'react';
import styled from 'styled-components';

import BlogData from './BlogData';

const Section = styled.section`
  .column {
    display: flex;
  }
`;

const BlogTile = () => (
  <Section className="section">
    <div className="columns is-multiline">
      <div className="column is-3">
        <BlogData
          color
          title="Top 5 reasons to choose deckerdence for your venue"
          subtitle="00/00/00"
          boxImage="/images/blog/first-image.png"
        />
      </div>
      <div className="column is-3">
        <BlogData
          title="Top 5 reasons to choose deckerdence for your venue"
          subtitle="00/00/00"
          boxImage="/images/blog/second-image.png"
        />
      </div>
      <div className="column is-6">
        <BlogData
          color
          title="Top 5 reasons to choose deckerdence for your venue"
          subtitle="00/00/00"
          boxImage="/images/blog/third-image.png"
        />
      </div>
      <div className="column is-6">
        <BlogData
          title="Top 5 reasons to choose deckerdence for your venue"
          subtitle="00/00/00"
          boxImage="/images/blog/fourth-image.png"
        />
      </div>
      <div className="column is-3">
        <BlogData
          color
          title="Top 5 reasons to choose deckerdence for your venue"
          subtitle="00/00/00"
          boxImage="/images/blog/fifth-image.png"
        />
      </div>
      <div className="column is-3">
        <BlogData
          title="Top 5 reasons to choose deckerdence for your venue"
          subtitle="00/00/00"
          boxImage="/images/blog/sixth-image.png"
        />
      </div>
    </div>
  </Section>
);

export default BlogTile;

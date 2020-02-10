import React from 'react';
import styled from 'styled-components';

import BlogData from './BlogData';

const Section = styled.section`
  .column {
    display: flex;
    /* flex-wrap: wrap; */
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
          boxImage="/images/blog/fotoone.png"
        />
      </div>
      <div className="column is-3">
        <BlogData
          title="Top 5 reasons to choose deckerdence for your venue"
          subtitle="00/00/00"
          boxImage="/images/blog/fototwo.png"
        />
      </div>
      <div className="column is-6">
        <BlogData
          color
          title="Top 5 reasons to choose deckerdence for your venue"
          subtitle="00/00/00"
          boxImage="/images/blog/fotothree.png"
        />
      </div>
      <div className="column is-6">
        <BlogData
          title="Top 5 reasons to choose deckerdence for your venue"
          subtitle="00/00/00"
          boxImage="/images/blog/fotofour.png"
        />
      </div>
      <div className="column is-3">
        <BlogData
          color
          title="Top 5 reasons to choose deckerdence for your venue"
          subtitle="00/00/00"
          boxImage="/images/blog/fotofifth.png"
        />
      </div>
      <div className="column is-3">
        <BlogData
          title="Top 5 reasons to choose deckerdence for your venue"
          subtitle="00/00/00"
          boxImage="/images/blog/fotosixth.png"
        />
      </div>
    </div>
  </Section>
);

export default BlogTile;

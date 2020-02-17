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
          title="Things to remember to do on your wedding day"
          subtitle="24/09/17"
          boxImage="/images/blog/second-image.png"
        />
      </div>
      <div className="column is-6">
        <BlogData
          color
          title="10 Step wedding Planning Guide"
          subtitle="17/08/17"
          boxImage="/images/blog/third-image.png"
        />
      </div>
      <div className="column is-6">
        <BlogData
          title="Our Wedding Drink Inspiration  guide"
          subtitle="10/07/17"
          boxImage="/images/blog/fourth-image.png"
        />
      </div>
      <div className="column is-3">
        <BlogData
          color
          title="National Proposal Day"
          subtitle="29/02/17"
          boxImage="/images/blog/fifth-image.png"
        />
      </div>
      <div className="column is-3">
        <BlogData
          title="Love is in the air for deckerdence"
          subtitle="12/02/16"
          boxImage="/images/blog/sixth-image.png"
        />
      </div>
    </div>
  </Section>
);

export default BlogTile;

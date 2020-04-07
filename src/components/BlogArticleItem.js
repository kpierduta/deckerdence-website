import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  .title {
    color: ${props => props.theme.primaryColor} !important ;
  }
`;

const BlogArticleItem = ({ title, subtitle }) => (
  <Section className="section">
    <div className="container">
      <h1 className="title is-4 is-spaced is-uppercase has-text-centered">
        {title}
      </h1>
      <p className="subtitle is-5 has-text-centered">{subtitle}</p>
    </div>
  </Section>
);

export default BlogArticleItem;

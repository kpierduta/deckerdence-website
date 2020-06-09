import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const Section = styled.div`
  .title {
    color: ${props => props.theme.primaryColor} !important ;
  }
`;

const BlogArticleItem = ({ title, subtitle }) => {
  console.log(subtitle, 'kunal sharma');
  return (
    <Section className="section">
      <div className="container">
        <h1 className="title is-4 is-spaced is-uppercase has-text-centered">
          {title}
        </h1>
        {subtitle.map(item => (
          <BlockContent blocks={item.portableText} />
        ))}
      </div>
    </Section>
  );
};

export default BlogArticleItem;

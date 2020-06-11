import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const Section = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.primaryColor} !important ;
    font-size: 22px !important;
    text-align: center;
    margin-bottom: 2rem !important;
    text-transform: uppercase !important;
    font-weight: 600 !important;
  }
  a {
    color: ${props => props.theme.primaryColor} !important ;
  }
  p {
    margin-bottom: 1.7rem !important;
    text-align: center !important;
  }
`;

const BlogArticleItem = ({ data }) => {
  return (
    <Section className="section">
      <div className="container">
        <BlockContent blocks={data.portableText} />
      </div>
    </Section>
  );
};

export default BlogArticleItem;

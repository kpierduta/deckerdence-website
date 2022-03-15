import React from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';

const Wrapper = styled.div`
  .content p,
  .content ul,
  .content strong {
    font-size: ${props => props.theme.fontSizeLarge} !important;
    color: ${props => (props.light ? '#fff' : '#000')};
  }
  .content p:not(:last-child) {
    margin-bottom: 0.5em;
  }
  .content strong {
    font-weight: 700 !important;
  }
  .content h1,
  p,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => (props.light ? '#fff' : '#000')};
  }
  .content h1 {
    font-weight: 600;
    font-size: 3rem;
  }

  .content h2 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${props => (props.light ? '#fff' : '#000')};
  }
`;

const PortableText = ({ children, light, className }) => {
  if (!children) return null;
  return (
    <Wrapper light={light}>
      <Markdown className={`content ${className}`}>{children}</Markdown>
    </Wrapper>
  );
};

export default PortableText;

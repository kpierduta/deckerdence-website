import React from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';

const Wrapper = styled.div`
  .content p,
  .content ul,
  .content strong {
    font-size: ${props => props.theme.fontSize} !important;
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

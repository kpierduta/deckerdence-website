import React from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';

const Wrapper = styled.div`
  .content p {
    font-size: ${props => props.theme.fontSize} !important;
    color: ${props => (props.light ? '#fff' : '#000')};
  }
  .content h1,
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
    line-height: 1.125;
  }
`;

const PortableText = ({ children, light }) => {
  if (!children) return null;
  return (
    <Wrapper light={light}>
      <Markdown className="content">{children}</Markdown>
    </Wrapper>
  );
};

export default PortableText;

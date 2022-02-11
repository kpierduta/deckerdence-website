import React from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';

const Wrapper = styled.div`
  .content h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => (props.dark ? '#000' : '#fff')};
  }
  .content h1 {
    font-weight: 600;
    font-size: 3rem;
    line-height: 1.125;
  }
`;

const PortableText = ({ children }) => {
  if (!children) return null;
  return (
    <Wrapper>
      <Markdown className="content">{children}</Markdown>
    </Wrapper>
  );
};

export default PortableText;

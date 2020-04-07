import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  color: ${props => (props.color ? props.color : props.theme.textColorLite)};
  letter-spacing: 0.2rem;
`;

const Heading = ({ heading, size, color }) => (
  <Wrapper
    className={`title is-spaced has-text-centered ${size || 'is-3'}`}
    color={color}
  >
    {heading}
  </Wrapper>
);

export default Heading;

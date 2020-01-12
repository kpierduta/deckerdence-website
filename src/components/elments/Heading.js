import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  color: ${props => (props.color ? props.color : props.theme.textColorLite)};
  letter-spacing: 0.2rem;
`;

const Heading = ({ title, size, color }) => (
  <Wrapper
    className={`title has-text-weight-semibold is-spaced has-text-centered ${size ||
      'is-1'}`}
    color={color}>
    {title}
  </Wrapper>
);

export default Heading;

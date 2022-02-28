import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  color: ${props =>
    props.dark ? props.theme.textDark : props.theme.lightAccent} !important;
  font-size: ${props => props.theme.fontSize2xl};
`;

const Title = ({ children, dark, className }) => (
  <Wrapper
    className={`title is-uppercase has-text-weight-normal is-size-3-mobile ${className}`}
    dark={dark}>
    {children}
  </Wrapper>
);

export default Title;
